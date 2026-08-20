const enhancementStyles=document.createElement('link');
enhancementStyles.rel='stylesheet';
enhancementStyles.href='enhancements.css?v=20260820-1723';
document.head.appendChild(enhancementStyles);

document.querySelector('#overview .eyebrow')?.remove();

const presence=document.querySelector('#presence');
if(presence){
  const lede=presence.querySelector('.lede');
  if(lede) lede.innerHTML='Tasmeer has a live brand, enquiry journeys and broker touchpoints, while external supply data shows an early-stage delivery profile. The commercial priority is to reconcile the story, strengthen proof and connect every touchpoint to measurable pipeline.';
  const presenceGrid=presence.querySelector('.grid.g4');
  if(presenceGrid){
    presenceGrid.classList.remove('g4');
    presenceGrid.classList.add('g3');
    presenceGrid.innerHTML=`
      <div class="card"><div class="kicker">DXBinteract / supply</div><div class="fact-number">2</div><div class="fact-label">projects listed as under construction</div><div class="verified">External market data</div></div>
      <div class="card ceo-glow"><div class="kicker">DXBinteract / supply</div><div class="fact-number">175</div><div class="fact-label">units listed as under construction</div><div class="verified">External market data</div></div>
      <div class="card"><div class="kicker">Official website claim</div><div class="fact-number">500+</div><div class="fact-label">apartments stated on Tasmeer Indigo's homepage</div><div class="verified">Company-published</div></div>`;
    const claims=document.createElement('div');
    claims.className='grid g3';
    claims.style.marginTop='16px';
    claims.innerHTML=`
      <div class="card"><div class="kicker">Official website claim</div><div class="fact-number">25+</div><div class="fact-label">years of industry experience stated publicly</div><div class="verified">Company-published</div></div>
      <div class="card"><div class="kicker">Official website claim</div><div class="fact-number">700K</div><div class="fact-label">sqft building area stated on the homepage</div><div class="verified">Company-published</div></div>
      <div class="card"><div class="kicker">Owned channels</div><div class="fact-number">Live</div><div class="fact-label">website, LinkedIn, YouTube and broker-registration touchpoints</div><div class="verified">Publicly observable</div></div>`;
    presenceGrid.insertAdjacentElement('afterend',claims);
    const reconcile=document.createElement('div');
    reconcile.className='warning ceo-glow';
    reconcile.innerHTML='<strong>Data reconciliation:</strong> the cited DXBinteract Tasmeer Development profile shows 2 under-construction projects, 175 under-construction units and 0 delivered projects/units in its supply overview. Tasmeer Indigo’s own website separately states 500+ apartments and 700K sqft building area. These sources may use different scopes or definitions; the first operational task should be to reconcile them into one approved project master dataset for the website, CRM, portals, broker kits and reporting.';
    claims.insertAdjacentElement('afterend',reconcile);
  }
  const badge=presence.querySelector('.note-badge');
  if(badge) badge.textContent='Directional interview assessment — external supply context added';
}

const findings=[...document.querySelectorAll('#gaps .finding')];
if(findings[0]){
  const h=findings[0].querySelector('h3');
  const p=findings[0].querySelector('p');
  if(h) h.textContent='Public portfolio data needs one source of truth';
  if(p) p.textContent='Tasmeer’s official website and DXBinteract present different portfolio-scale views. Before scaling campaigns, create one approved project master dataset covering project status, registered units, marketed inventory, construction progress, payment plan, handover and claims.';
}
if(findings[2]){
  const h=findings[2].querySelector('h3');
  const p=findings[2].querySelector('p');
  if(h) h.textContent='Trust proof matters while delivery history is being established';
  if(p) p.textContent='DXBinteract’s supply overview shows 0 delivered projects/units for this developer profile. Investor marketing should therefore lean heavily on registered project facts, construction progress, payment and escrow clarity, management credibility, site evidence and transparent availability—not an assumed delivered track record.';
}

const positioningCallout=document.querySelector('#positioning .callout p');
if(positioningCallout) positioningCallout.textContent='With DXBinteract showing no delivered supply on the cited developer profile, proof before promotion becomes even more important: construction progress, registered project data, management visibility, payment and escrow clarity, transparent availability and buyer education should carry more weight than premium renders alone.';

const roadmapItems=document.querySelectorAll('#roadmap .phase:first-of-type li');
if(roadmapItems[1]) roadmapItems[1].textContent='Reconcile official website portfolio claims against DLD/DXBinteract supply data and create one project master dataset: registered units, marketed inventory, price, payment plan, construction status, handover and approved claims.';

const sources=document.querySelector('#sources');
if(sources){
  const lede=sources.querySelector('.lede');
  if(lede) lede.textContent='Public audit snapshot refreshed 20 August 2026 with DXBinteract supply context. Internal spend, CPL, lead volumes, sell-through, conversion rates and sales response performance still require company access.';
  const firstSource=sources.querySelector('.source-card');
  const sourceList=firstSource?.parentElement;
  if(sourceList && !document.querySelector('#source-dxb')){
    const dxb=document.createElement('div');
    dxb.className='source-card';
    dxb.id='source-dxb';
    dxb.innerHTML='<div><h4>DXBinteract — Tasmeer Development</h4><p>External developer supply/transaction profile. The supply overview lists 2 projects and 175 units under construction, with 0 delivered projects and 0 delivered units.</p></div><a href="https://dxbinteract.com/top-property-developers-in-dubai/Tasmeer-Development" target="_blank" rel="noopener">OPEN ↗</a>';
    sourceList.insertBefore(dxb,firstSource);
  }
}

/* CEO emphasis: response speed, data quality and revenue accountability */
const crmPriorityCards=[...document.querySelectorAll('#crm .grid.g3 .card')];
crmPriorityCards.slice(0,2).forEach(card=>card.classList.add('ceo-glow'));
[...document.querySelectorAll('#kpis .kpi')].forEach(kpi=>{
  const metric=kpi.querySelector('strong')?.textContent.trim();
  if(metric==='CAC'||metric==='ROAS') kpi.classList.add('ceo-glow');
});
[...document.querySelectorAll('#kpis .target')].forEach(target=>{
  if(target.querySelector('b')?.textContent.trim()==='100%') target.classList.add('ceo-glow');
});
document.querySelector('#kpis .callout')?.classList.add('ceo-glow');

const sections=[...document.querySelectorAll('main section')];
const desktopLinks=[...document.querySelectorAll('.nav a')];
const mobileTop=document.querySelector('.mobile-top');
let mobileDrawer=null;
let mobileSectionTitle=null;
let mobileProgressBar=null;

if(mobileTop){
  mobileTop.innerHTML=`
    <div class="mobile-brand">
      <span class="mobile-mark">TI</span>
      <span class="mobile-context"><b>Tasmeer Indigo</b><span id="mobile-section-title">01 / Executive view</span></span>
    </div>
    <button class="mobile-menu-btn" type="button" aria-label="Open section navigation" aria-expanded="false"><span>Menu</span><i class="mobile-menu-icon" aria-hidden="true"></i></button>
    <div class="mobile-progress" aria-hidden="true"><i></i></div>`;
  mobileSectionTitle=mobileTop.querySelector('#mobile-section-title');
  mobileProgressBar=mobileTop.querySelector('.mobile-progress i');

  mobileDrawer=document.createElement('div');
  mobileDrawer.className='mobile-drawer';
  mobileDrawer.setAttribute('aria-hidden','true');
  mobileDrawer.innerHTML=`
    <div class="mobile-drawer-head"><div><div class="section-label" style="margin:0 0 6px">Navigate strategy</div><div class="mobile-drawer-title">Choose a section</div></div><button class="mobile-close" type="button" aria-label="Close navigation">×</button></div>
    <nav class="mobile-drawer-nav" aria-label="Mobile section navigation">${desktopLinks.map(a=>`<a href="${a.getAttribute('href')}">${a.textContent}</a>`).join('')}</nav>
    <div class="mobile-drawer-actions"><button class="btn" type="button" data-mobile-present>Present</button><button class="btn" type="button" data-mobile-pdf>Export PDF</button></div>`;
  document.body.appendChild(mobileDrawer);

  const menuButton=mobileTop.querySelector('.mobile-menu-btn');
  const closeButton=mobileDrawer.querySelector('.mobile-close');
  const setMenu=open=>{
    document.body.classList.toggle('mobile-nav-open',open);
    menuButton?.setAttribute('aria-expanded',String(open));
    mobileDrawer?.setAttribute('aria-hidden',String(!open));
    if(open) closeButton?.focus();
  };
  menuButton?.addEventListener('click',()=>setMenu(true));
  closeButton?.addEventListener('click',()=>setMenu(false));
  mobileDrawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  mobileDrawer.querySelector('[data-mobile-present]')?.addEventListener('click',()=>{setMenu(false);togglePresent();});
  mobileDrawer.querySelector('[data-mobile-pdf]')?.addEventListener('click',()=>{setMenu(false);window.print();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('mobile-nav-open')){e.preventDefault();setMenu(false);}});
}

const labelByHref=new Map(desktopLinks.map(a=>[a.getAttribute('href'),a.textContent.trim()]));
sections.forEach((section,index)=>{
  if(index>=sections.length-1||section.querySelector('.mobile-next')) return;
  const next=sections[index+1];
  const nextLabel=labelByHref.get('#'+next.id)||`Next section`;
  const nextLink=document.createElement('a');
  nextLink.className='mobile-next';
  nextLink.href='#'+next.id;
  nextLink.innerHTML=`<span>Continue reading</span><strong>${nextLabel}</strong><i aria-hidden="true">→</i>`;
  section.appendChild(nextLink);
});

const navLinks=()=>[...document.querySelectorAll('.nav a,.mobile-drawer-nav a')];
function activateSection(section){
  const href='#'+section.id;
  navLinks().forEach(a=>a.classList.toggle('active',a.getAttribute('href')===href));
  if(mobileSectionTitle) mobileSectionTitle.textContent=labelByHref.get(href)||section.id;
}

const observer=new IntersectionObserver(entries=>{
  entries.filter(entry=>entry.isIntersecting).forEach(entry=>activateSection(entry.target));
},{rootMargin:'-18% 0px -70% 0px',threshold:0});
sections.forEach(s=>observer.observe(s));
if(sections[0]) activateSection(sections[0]);

let scrollTick=false;
function updateReadingProgress(){
  if(!mobileProgressBar) return;
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const pct=max>0?Math.min(100,Math.max(0,(window.scrollY/max)*100)):0;
  mobileProgressBar.style.width=`${Math.max(2,pct)}%`;
}
window.addEventListener('scroll',()=>{
  if(scrollTick) return;
  scrollTick=true;
  requestAnimationFrame(()=>{updateReadingProgress();scrollTick=false;});
},{passive:true});
updateReadingProgress();

function togglePresent(){
  document.body.classList.toggle('presenting');
  if(document.body.classList.contains('presenting')){
    document.documentElement.requestFullscreen?.().catch(()=>{});
  }else{
    document.exitFullscreen?.().catch(()=>{});
  }
}
window.togglePresent=togglePresent;

document.addEventListener('keydown',e=>{
  if(!document.body.classList.contains('presenting')||document.body.classList.contains('mobile-nav-open')) return;
  const current=sections.findIndex(s=>{const r=s.getBoundingClientRect();return r.top<=window.innerHeight*.4&&r.bottom>=window.innerHeight*.4;});
  if(['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)){
    e.preventDefault();
    sections[Math.min(sections.length-1,current+1)]?.scrollIntoView({behavior:'smooth'});
  }
  if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){
    e.preventDefault();
    sections[Math.max(0,current-1)]?.scrollIntoView({behavior:'smooth'});
  }
  if(e.key==='Escape') document.body.classList.remove('presenting');
});