const sections=[...document.querySelectorAll('main > section[id]')];
const desktopLinks=[...document.querySelectorAll('.nav a')];
const mobileTop=document.querySelector('.mobile-top');
let mobileDrawer=null;
let mobileSectionTitle=null;
let mobileProgressBar=null;

const money=value=>new Intl.NumberFormat('en-AE',{style:'currency',currency:'AED',maximumFractionDigits:0}).format(value).replace('AED','AED ');
const moneyCompact=value=>{
  if(value>=1000000) return `AED ${(value/1000000).toFixed(value>=10000000?1:2)}M`;
  if(value>=1000) return `AED ${(value/1000).toFixed(0)}K`;
  return money(value);
};

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
    <div class="mobile-drawer-head"><div><div class="section-label" style="margin:0 0 6px">Navigate plan</div><div class="mobile-drawer-title">Choose a section</div></div><button class="mobile-close" type="button" aria-label="Close navigation">×</button></div>
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
  const nextLabel=labelByHref.get('#'+next.id)||'Next section';
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

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
    if(visible[0]) activateSection(visible[0].target);
  },{rootMargin:'-18% 0px -68% 0px',threshold:[0,.05,.2]});
  sections.forEach(s=>observer.observe(s));
}
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

document.addEventListener('fullscreenchange',()=>{
  if(!document.fullscreenElement) document.body.classList.remove('presenting');
});

document.addEventListener('keydown',e=>{
  if(!document.body.classList.contains('presenting')||document.body.classList.contains('mobile-nav-open')) return;
  const current=sections.findIndex(s=>{const r=s.getBoundingClientRect();return r.top<=window.innerHeight*.42&&r.bottom>=window.innerHeight*.42;});
  if(['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)){
    e.preventDefault();
    sections[Math.min(sections.length-1,Math.max(0,current)+1)]?.scrollIntoView({behavior:'smooth'});
  }
  if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){
    e.preventDefault();
    sections[Math.max(0,current-1)]?.scrollIntoView({behavior:'smooth'});
  }
});

const budgetInput=document.getElementById('budgetInput');
const cpqlInput=document.getElementById('cpqlInput');
const qToViewingInput=document.getElementById('qToViewingInput');
const viewToBookingInput=document.getElementById('viewToBookingInput');
const avgValueInput=document.getElementById('avgValueInput');

function updateProjection(){
  if(!budgetInput||!cpqlInput||!qToViewingInput||!viewToBookingInput||!avgValueInput) return;
  const budget=Number(budgetInput.value);
  const cpql=Number(cpqlInput.value);
  const qToViewing=Number(qToViewingInput.value)/100;
  const viewToBooking=Number(viewToBookingInput.value)/100;
  const avgValue=Number(avgValueInput.value);
  const qualified=budget/cpql;
  const viewings=qualified*qToViewing;
  const bookings=viewings*viewToBooking;
  const bookedValue=bookings*avgValue;

  document.getElementById('budgetLabel').textContent=money(budget);
  document.getElementById('cpqlLabel').textContent=money(cpql);
  document.getElementById('qToViewingLabel').textContent=`${Math.round(qToViewing*100)}%`;
  document.getElementById('viewToBookingLabel').textContent=`${Math.round(viewToBooking*100)}%`;
  document.getElementById('avgValueLabel').textContent=moneyCompact(avgValue);
  document.getElementById('qualifiedOutput').textContent=qualified.toFixed(0);
  document.getElementById('viewingOutput').textContent=viewings.toFixed(0);
  document.getElementById('bookingOutput').textContent=bookings.toFixed(1);
  document.getElementById('salesValueOutput').textContent=moneyCompact(bookedValue);

  document.querySelectorAll('.scenario-card').forEach(card=>card.classList.toggle('active',Number(card.dataset.budget)===budget));
}
[budgetInput,cpqlInput,qToViewingInput,viewToBookingInput,avgValueInput].filter(Boolean).forEach(input=>input.addEventListener('input',updateProjection));
document.querySelectorAll('.scenario-card').forEach(card=>card.addEventListener('click',()=>{
  if(!budgetInput) return;
  budgetInput.value=card.dataset.budget;
  updateProjection();
  document.getElementById('projection')?.scrollIntoView({behavior:'smooth',block:'start'});
}));
updateProjection();

const inventoryInput=document.getElementById('inventoryInput');
const monthlyBookingsInput=document.getElementById('monthlyBookingsInput');
const inventoryValueInput=document.getElementById('inventoryValueInput');
function updateSellThrough(){
  if(!inventoryInput||!monthlyBookingsInput||!inventoryValueInput) return;
  const units=Math.max(1,Number(inventoryInput.value)||1);
  const monthly=Math.max(1,Number(monthlyBookingsInput.value)||1);
  const avg=Math.max(0,Number(inventoryValueInput.value)||0);
  document.getElementById('monthsOutput').textContent=`${(units/monthly).toFixed(1)} months`;
  document.getElementById('inventoryValueOutput').textContent=moneyCompact(units*avg);
  document.getElementById('monthlyValueOutput').textContent=moneyCompact(monthly*avg);
}
[inventoryInput,monthlyBookingsInput,inventoryValueInput].filter(Boolean).forEach(input=>input.addEventListener('input',updateSellThrough));
updateSellThrough();

/* Keep the CEO market snapshot focused on Tasmeer's immediate JVC primary-market context. */
const marketSection=document.getElementById('market');
const marketCards=[...document.querySelectorAll('#market .market-stat-grid .card')];
if(marketSection&&marketCards.length>=6){
  const marketLede=marketSection.querySelector('.lede');
  if(marketLede) marketLede.textContent='For Tasmeer, the most relevant opportunity is JVC developer first-sale demand. This view therefore prioritises JVC primary-market volume, value, growth and competitive supply instead of Dubai-wide headline totals.';

  marketCards[0].innerHTML='<div class="kicker">JVC 2025 / Primary first sale</div><div class="fact-number">12,074</div><div class="fact-label">developer first-sale transactions recorded during 2025</div><div class="verified">Metropolitan market report</div>';
  marketCards[1].innerHTML='<div class="kicker">JVC 2025 / Primary first sale</div><div class="fact-number">AED 13.172B</div><div class="fact-label">total value of developer first-sale transactions during 2025</div><div class="verified">Metropolitan market report</div>';
  marketCards[2].innerHTML='<div class="kicker">JVC 2025 / Sales mix</div><div class="fact-number">69%</div><div class="fact-label">approximate share of recorded JVC sales represented by developer first-sale transactions</div><div class="verified">Calculated from Metropolitan report</div>';
  marketCards[3].innerHTML='<div class="kicker">JVC 2025 / Primary volume</div><div class="fact-number">+2.8%</div><div class="fact-label">year-on-year growth in developer first-sale transaction volume</div><div class="verified">Metropolitan market report</div>';
  marketCards[4].innerHTML='<div class="kicker">JVC 2025 / Primary value</div><div class="fact-number">+13.8%</div><div class="fact-label">year-on-year growth in total developer first-sale transaction value</div><div class="verified">Metropolitan market report</div>';
  marketCards[5].innerHTML='<div class="kicker">JVC / Current competition</div><div class="fact-number">89</div><div class="fact-label">active off-plan projects listed in the community</div><div class="verified">DXBinteract</div>';

  const implication=marketSection.querySelector('.callout p');
  if(implication) implication.textContent='JVC recorded substantial developer first-sale activity in 2025, but active off-plan supply remains intense. Tasmeer therefore needs to win a measurable share of primary demand through proof, offer clarity, broker activation and sales execution.';
}

const sourceList=document.querySelector('#sources .source-list');
if(sourceList&&!document.getElementById('source-jvc-primary-2025')){
  const source=document.createElement('div');
  source.className='source-card';
  source.id='source-jvc-primary-2025';
  source.innerHTML='<div><h4>Metropolitan Premium Properties - JVC 2025 Market Report</h4><p>Jumeirah Village Circle 2025 report showing 12,074 off-plan primary initial sales by developers worth AED 13.172B, with primary transaction volume up 2.8% and total value up 13.8%.</p></div><a href="https://metropolitan.realestate/wp-content/uploads/2026/01/Jumeirah-Village-Circle-A.pdf" target="_blank" rel="noopener">OPEN ↗</a>';
  sourceList.prepend(source);
}

/* Make the CEO scorecard read like an executive dashboard rather than repeated placeholders. */
const scorecardSection=document.getElementById('scorecard');
if(scorecardSection){
  const scorecardHeading=scorecardSection.querySelector('.display.small');
  if(scorecardHeading) scorecardHeading.innerHTML='Eight measures should explain <span class="accent">commercial performance.</span>';

  const scorecardLede=scorecardSection.querySelector('.lede');
  if(scorecardLede) scorecardLede.textContent='Until live CRM and sales data are connected, the cards show the commercial meaning of each measure. Replace the emphasis line with the real monthly value once reporting is live.';

  const emphasis=['Spend','Quality','Intent','Sales','Value','Efficiency','Broker share','Sell-through'];
  scorecardSection.querySelectorAll('.ceo-metric strong').forEach((el,index)=>{
    if(emphasis[index]) el.textContent=emphasis[index];
  });
}

const normalizePunctuation=text=>text.replace(/\s*\u2014\s*/g,' - ');
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
let node;
while((node=walker.nextNode())){
  if(node.nodeValue.includes('\u2014')) node.nodeValue=normalizePunctuation(node.nodeValue);
}
document.title=normalizePunctuation(document.title);
document.querySelectorAll('meta[content]').forEach(meta=>meta.setAttribute('content',normalizePunctuation(meta.getAttribute('content')||'')));
