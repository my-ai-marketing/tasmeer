import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const expected = [
  ['overview','Executive view'],
  ['presence','Current digital presence'],
  ['market','Market opportunity'],
  ['competition','Competitive position'],
  ['buyers','Buyer markets'],
  ['funnel','Growth funnel'],
  ['crm','CRM architecture'],
  ['team','Team & resources'],
  ['investment','Investment plan'],
  ['projection','Revenue projection'],
  ['sellthrough','Sell-through plan'],
  ['brokers','Broker strategy'],
  ['roadmap','90-day growth plan'],
  ['ceoscore','Executive scorecard'],
  ['risks','Risks & decisions'],
  ['execution','Execution detail']
];

const viewports = [
  {name:'desktop-1440', width:1440, height:1000, mobile:false},
  {name:'desktop-1280', width:1280, height:800, mobile:false},
  {name:'mobile-430', width:430, height:932, mobile:true},
  {name:'mobile-390', width:390, height:844, mobile:true}
];

await fs.mkdir('qa-artifacts', {recursive:true});
const executablePath=process.env.CHROME_BIN;
if(!executablePath) throw new Error('CHROME_BIN is not set');
const browser = await chromium.launch({headless:true,executablePath,args:['--no-sandbox']});
const report = {generatedAt:new Date().toISOString(), expected:expected.map(x=>x[0]), viewports:{}};
let failed = false;

for (const vp of viewports) {
  const page = await browser.newPage({viewport:{width:vp.width,height:vp.height}, deviceScaleFactor:1});
  const consoleErrors=[];
  page.on('console', msg=>{ if(msg.type()==='error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err=>consoleErrors.push(String(err)));
  await page.goto('http://127.0.0.1:4173/', {waitUntil:'networkidle'});
  await page.waitForTimeout(1800);

  const data = await page.evaluate(({expected,mobile})=>{
    const visible = el => {
      const cs=getComputedStyle(el);
      const r=el.getBoundingClientRect();
      return !el.hidden && cs.display!=='none' && cs.visibility!=='hidden' && r.width>0 && r.height>0;
    };
    const primary = expected.map(([id,title],i)=>{
      const el=document.getElementById(id);
      if(!el) return {id,title,index:i+1,missing:true};
      const r=el.getBoundingClientRect();
      const label=el.querySelector(':scope > .section-label')?.textContent.trim()||'';
      return {
        id,title,index:i+1,missing:false,visible:visible(el),hidden:el.hidden,
        left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width),height:Math.round(r.height),
        label, overflowX:el.scrollWidth>el.clientWidth+1
      };
    });
    const visibleMainSections=[...document.querySelectorAll('main > section')].filter(visible).map(x=>x.id);
    const nav=[...document.querySelectorAll('.nav a')].map(a=>({href:a.getAttribute('href'),text:a.textContent.trim()}));
    const drawer=[...document.querySelectorAll('.mobile-drawer-nav a')].map(a=>({href:a.getAttribute('href'),text:a.textContent.trim()}));
    const bodyText=document.body.innerText;
    const desktopChapter=document.querySelector('.desktop-chapter');
    const desktopRail=document.querySelector('.desktop-rail');
    const mobileTop=document.querySelector('.mobile-top');
    return {
      primary, visibleMainSections, nav, drawer,
      documentOverflowX:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,
      scrollWidth:document.documentElement.scrollWidth, clientWidth:document.documentElement.clientWidth,
      visibleForbiddenWord:/\bCEO\b/i.test(bodyText),
      mobileNextCount:document.querySelectorAll('.mobile-next').length,
      desktopChapterVisible:desktopChapter?visible(desktopChapter):false,
      desktopRailVisible:desktopRail?visible(desktopRail):false,
      mobileTopVisible:mobileTop?visible(mobileTop):false,
      expectedMobile:mobile
    };
  }, {expected,mobile:vp.mobile});

  const errors=[];
  if(data.visibleMainSections.join('|')!==expected.map(x=>x[0]).join('|')) errors.push(`Visible main section order mismatch: ${data.visibleMainSections.join(', ')}`);
  if(data.primary.some(x=>x.missing)) errors.push('One or more primary sections are missing');
  if(data.primary.some(x=>!x.visible)) errors.push('One or more primary sections are not visible');
  if(data.primary.some(x=>x.overflowX)) errors.push(`Section horizontal overflow: ${data.primary.filter(x=>x.overflowX).map(x=>x.id).join(', ')}`);
  if(data.documentOverflowX) errors.push(`Document horizontal overflow ${data.scrollWidth}px > ${data.clientWidth}px`);
  if(data.nav.length!==16) errors.push(`Desktop/source nav has ${data.nav.length} links, expected 16`);
  if(data.drawer.length!==16) errors.push(`Mobile drawer has ${data.drawer.length} links, expected 16`);
  if(data.mobileNextCount!==15) errors.push(`Continue-reading links: ${data.mobileNextCount}, expected 15`);
  if(data.visibleForbiddenWord) errors.push('Visible forbidden role title found');
  data.primary.forEach((x,i)=>{
    const prefix=String(i+1).padStart(2,'0')+' / ';
    if(!x.label.startsWith(prefix)) errors.push(`${x.id} label is "${x.label}"; expected prefix ${prefix}`);
    if(x.left<-1 || x.right>vp.width+1) errors.push(`${x.id} exceeds viewport (${x.left}..${x.right})`);
  });
  if(vp.mobile){
    if(!data.mobileTopVisible) errors.push('Mobile header is not visible');
    if(data.desktopChapterVisible||data.desktopRailVisible) errors.push('Desktop navigation visible on mobile');
  } else {
    if(!data.desktopChapterVisible||!data.desktopRailVisible) errors.push('Desktop chapter navigation is not visible');
  }
  if(consoleErrors.length) errors.push(`Console errors: ${consoleErrors.join(' | ')}`);

  data.errors=errors;
  data.consoleErrors=consoleErrors;
  report.viewports[vp.name]=data;
  if(errors.length) failed=true;
  await page.screenshot({path:`qa-artifacts/${vp.name}-full.png`, fullPage:true});
  for(const [id] of expected){
    const el=page.locator(`#${id}`);
    if(await el.count()) await el.screenshot({path:`qa-artifacts/${vp.name}-${id}.png`});
  }
  await page.close();
}

await browser.close();
await fs.writeFile('qa-artifacts/report.json', JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(failed) process.exitCode=1;
