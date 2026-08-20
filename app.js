const presence=document.querySelector('#presence');
if(presence){
  const lede=presence.querySelector('.lede');
  if(lede) lede.innerHTML='Tasmeer has a live brand, enquiry journeys and broker touchpoints, while external supply data shows an early-stage delivery profile. The commercial priority is to reconcile the story, strengthen proof and connect every touchpoint to measurable pipeline.';
  const presenceGrid=presence.querySelector('.grid.g4');
  if(presenceGrid){
    presenceGrid.innerHTML=`
      <div class="card"><div class="kicker">DXBinteract / supply</div><div class="fact-number">2</div><div class="fact-label">projects listed as under construction</div><div class="verified">External market data</div></div>
      <div class="card"><div class="kicker">DXBinteract / supply</div><div class="fact-number">175</div><div class="fact-label">units listed as under construction</div><div class="verified">External market data</div></div>
      <div class="card"><div class="kicker">DXBinteract / delivered</div><div class="fact-number">0</div><div class="fact-label">delivered projects and 0 delivered units shown in the supply overview</div><div class="verified">External market data</div></div>
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
    reconcile.className='warning';
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

const sections=[...document.querySelectorAll('main section')];
const links=[...document.querySelectorAll('.nav a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}})},{threshold:.35});
sections.forEach(s=>observer.observe(s));
function togglePresent(){document.body.classList.toggle('presenting');if(document.body.classList.contains('presenting')){document.documentElement.requestFullscreen?.().catch(()=>{});}else{document.exitFullscreen?.().catch(()=>{});}}
window.togglePresent=togglePresent;
document.addEventListener('keydown',e=>{if(!document.body.classList.contains('presenting'))return;const current=sections.findIndex(s=>{const r=s.getBoundingClientRect();return r.top<=window.innerHeight*.4&&r.bottom>=window.innerHeight*.4;});if(['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();sections[Math.min(sections.length-1,current+1)]?.scrollIntoView({behavior:'smooth'});}if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();sections[Math.max(0,current-1)]?.scrollIntoView({behavior:'smooth'});}if(e.key==='Escape'){document.body.classList.remove('presenting');}});