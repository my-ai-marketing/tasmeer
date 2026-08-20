(()=>{
  const main=document.querySelector('main');
  const nav=document.querySelector('.nav');
  const overview=document.getElementById('overview');
  const roadmap=document.getElementById('roadmap');
  if(!main||!nav||!overview||!roadmap) return;

  ['ceo-growth.css?v=20260820-1824','desktop-nav.css?v=20260820-1754','layout-fix.css?v=20260820-1759'].forEach(href=>{
    const l=document.createElement('link'); l.rel='stylesheet'; l.href=href; document.head.appendChild(l);
  });

  const h=overview.querySelector('.display');
  const lede=overview.querySelector('.lede');
  const chips=overview.querySelector('.chips');
  const quote=overview.querySelector('.quote');
  if(h) h.innerHTML='From marketing activity<br>to <span class="accent">commercial growth.</span>';
  if(lede) lede.textContent='A CEO-level plan to turn Tasmeer Indigo\'s projects, broker network and marketing investment into measurable buyer demand, bookings, sell-through and revenue.';
  if(chips) chips.innerHTML='<span class="chip">Market opportunity</span><span class="chip">Competitive position</span><span class="chip">Buyer markets</span><span class="chip">Investment scenarios</span><span class="chip">Revenue projection</span><span class="chip">Sell-through plan</span>';
  if(quote) quote.textContent='The question is not how much marketing we can do. The question is how efficiently we can convert controlled investment into qualified buyers, bookings and project sell-through.';

  const section=(id,label,title,lede,body)=>{
    const s=document.createElement('section');
    s.id=id;
    s.innerHTML=`<div class="section-label">${label}</div><h2 class="display small">${title}</h2>${lede?`<p class="lede">${lede}</p>`:''}${body}`;
    return s;
  };

  const market=section('market','02 / Market opportunity','The market is active.<br><span class="accent">The buyer is more selective.</span>','Dubai remains heavily driven by primary and off-plan sales, but 2026 data also shows softer transaction volumes. Tasmeer should treat this as a quality-of-offer and quality-of-execution market, not a volume-at-any-cost market.',`
    <div class="ceo-stat-grid">
      <div class="ceo-stat ceo-glow"><small>Dubai, May 2026</small><div><strong>74%</strong><p>of apartment, villa and commercial sales volume was primary/off-plan.</p></div></div>
      <div class="ceo-stat"><small>JVC 1-bed benchmark</small><div><strong>AED 1,463</strong><p>per sqft current Bayut index for 1-bedroom apartments in JVC.</p></div></div>
      <div class="ceo-stat"><small>Competitive density</small><div><strong>73</strong><p>JVC projects listed by Bayut with handover by 2026.</p></div></div>
      <div class="ceo-stat"><small>Tasmeer entry point</small><div><strong>AED 692K</strong><p>SquareX Residence starting price published by Tasmeer.</p></div></div>
    </div>
    <div class="ceo-insight"><b>CEO interpretation</b><p>Tasmeer is selling into a large off-plan market, but JVC buyers have many alternatives. The advantage must come from project proof, competitive pricing, payment clarity, broker confidence and fast sales follow-up.</p></div>
    <div class="ceo-source-note">Sources: <a href="https://dxbinteract.com/market-reports/2026/may" target="_blank" rel="noopener">DXBinteract May 2026</a> · <a href="https://www.bayut.com/property-market-analysis/index/sale/1-bedroom-apartments/dubai/jumeirah-village-circle-jvc/" target="_blank" rel="noopener">Bayut JVC index</a> · <a href="https://www.bayut.com/s/new-projects-with-handover-2026-in-jvc/" target="_blank" rel="noopener">Bayut JVC projects</a></div>`);

  const comps=[
    ['SquareX Residence','Tasmeer Indigo','AED 692K','70/30 official; Bayut shows 63/37','Q4 2026','Mainstream entry price. Reconcile public payment-plan data.','tasmeer-row'],
    ['The F1fth','Object One','AED 554K','60/40','Q4 2026','Lower-price competitor.',''],
    ['Luxor','Imtiaz','AED 676K','60/40','Q4 2026','Very close price competitor.',''],
    ['Elitz 3','Danube','AED 699K','64/36','Q4 2026','Near-identical entry price with stronger awareness.',''],
    ['Samana Manhattan','Samana','AED 689K','100/0','Q4 2026','Near-identical entry price with aggressive payment structure.',''],
    ['Hillmont Residences','Ellington','AED 1.33M','70/30','Q4 2026','Premium-price reference point.','']
  ];
  const competition=section('competition','03 / Competitive position','Tasmeer is not the cheapest.<br><span class="accent">That can be an advantage.</span>','SquareX Residence sits close to the mainstream JVC launch-price band. Tasmeer should compete on product quality, amenities, trust and execution rather than trying to win a price war.',`
    <div class="competitor-wrap"><table class="competitor-table"><thead><tr><th>Project</th><th>Developer</th><th>Launch price</th><th>Payment plan</th><th>Handover</th><th>CEO read</th></tr></thead><tbody>${comps.map(r=>`<tr class="${r[6]}"><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td class="price">${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td class="fit">${r[5]}</td></tr>`).join('')}</tbody></table></div>
    <div class="ceo-insight"><b>Where Tasmeer can win</b><p>Own the middle ground: design-led product, strong amenity value, transparent construction proof, straightforward investor education and a broker experience that is faster than larger competitors.</p></div>
    <div class="ceo-source-note">Comparable launch data from Bayut's JVC 2026 project listings. Tasmeer payment-plan information should be verified internally because public sources differ.</div>`);

  const markets=[
    ['Priority market','Tier 1','India','Investor education, remote purchase confidence, payment structure and Dubai diversification.','Indian buyers remain among the largest foreign buyer groups in current 2026 market reporting.',true],
    ['Priority market','Tier 1','United Kingdom','Yield, diversification, near-ready proof, ownership process and currency-aware messaging.','UK buyers also rank among the strongest foreign buyer groups across recent datasets.',true],
    ['Local conversion','Tier 1','UAE residents','Own-versus-rent, first-time purchase, lifestyle, viewing convenience and immediate sales follow-up.','Property Finder reported strong purchase intent among its consumer respondents entering 2026.',false],
    ['Arabic growth','Tier 2','Egypt + Saudi/GCC','Arabic creative, regional proximity, second-home logic, family use and relationship-led broker sales.','Egypt and Saudi Arabia also appear in current foreign-buyer rankings.',false]
  ];
  const buyers=section('buyers','04 / Buyer markets','Focus budget where buyer demand<br><span class="accent">already exists.</span>','Brokerage datasets differ on exact rankings, but India and the UK consistently appear among Dubai\'s largest foreign buyer groups. UAE residents should remain a separate high-intent segment because they can view and convert locally.',`
    <div class="ceo-market-grid">${markets.map(m=>`<div class="ceo-market-card ${m[5]?'ceo-glow':''}"><small>${m[0]}</small><span class="tier">${m[1]}</span><h3>${m[2]}</h3><p>${m[3]}</p><div class="why">${m[4]}</div></div>`).join('')}</div>
    <div class="ceo-insight"><b>Budget rule</b><p>Start with UAE resident, India and UK campaigns. Move budget based on qualified-buyer rate, viewing rate and booking rate. Add Arabic markets as a separately measured growth cluster.</p></div>
    <div class="ceo-source-note">Sources: <a href="https://www.khaleejtimes.com/business/indian-uk-egyptian-investors-top-dubai-property-buyers-in-2026" target="_blank" rel="noopener">Khaleej Times, July 2026</a> · <a href="https://www.propertyfinder.com/news/property-finder-reveals-key-trends-shaping-dubai-and-abu-dhabis-residential-property-market/" target="_blank" rel="noopener">Property Finder 2026 trends</a></div>`);

  const plans=[
    ['Validation','AED 100K','Recommended first approval','Prove which markets, channels, messages and sales follow-up create qualified demand.','30-45 days','Prove conversion','Only on evidence',true],
    ['Growth','AED 250K','Scale proven campaigns','Increase spend only after reliable qualified-buyer and booking economics are visible.','45-90 days','Increase bookings','Stable CAC',false],
    ['Acceleration','AED 500K','Project-level sales push','Use only when inventory, pricing, sales capacity and channel performance justify a larger push.','After proof','Sell-through','Revenue evidence',false]
  ];
  const investment=section('investment','05 / Marketing investment plan','Start with <span class="accent">AED 100K.</span><br>Earn the right to scale.','The first budget should validate buyer quality and sales conversion. AED 250K and AED 500K are scale scenarios, not day-one commitments.',`
    <div class="ceo-plan-grid">${plans.map(p=>`<div class="ceo-plan-card ${p[7]?'recommended':''}"><small>${p[0]}</small><div class="budget">${p[1]}</div><h3>${p[2]}</h3><p>${p[3]}</p><ul><li><span>Decision horizon</span><b>${p[4]}</b></li><li><span>Main objective</span><b>${p[5]}</b></li><li><span>Requirement</span><b>${p[6]}</b></li></ul></div>`).join('')}</div>
    <div class="ceo-allocation"><div><b>60%</b><span>Paid media</span></div><div><b>15%</b><span>Portals</span></div><div><b>10%</b><span>Content</span></div><div><b>5%</b><span>CRM + tracking</span></div><div><b>5%</b><span>Broker activation</span></div><div><b>5%</b><span>Testing reserve</span></div></div>
    <div class="ceo-source-note">Illustrative allocation for the first controlled investment. The actual split should change based on project margin, inventory, portal contracts and conversion data.</div>`);

  const projections=[
    ['Conservative','Proof is weak but useful','250','75','20','2','AED 2.4M',false],
    ['Base planning case','Target validation outcome','290','90','26','3','AED 3.6M',true],
    ['Strong','Evidence supports scaling','330','105','32','4','AED 4.8M',false]
  ];
  const projection=section('projection','06 / Revenue projection','Turn AED 100K into a<br><span class="accent">commercial hypothesis.</span>','This forecast is a planning model, not a performance promise. Replace every assumption with Tasmeer\'s real data after the first 30-45 days.',`
    <div class="projection-grid">${projections.map(p=>`<div class="projection-card ${p[7]?'base ceo-glow':''}"><small>${p[0]}</small><h3>${p[1]}</h3><div class="projection-step"><span>Enquiries</span><b>${p[2]}</b></div><div class="projection-step"><span>Qualified buyers</span><b>${p[3]}</b></div><div class="projection-step"><span>Viewings / serious calls</span><b>${p[4]}</b></div><div class="projection-step"><span>Bookings</span><b>${p[5]}</b></div><div class="sales-value"><b>${p[6]}</b><span>illustrative booked property value</span></div></div>`).join('')}</div>
    <div class="ceo-insight"><b>Planning assumptions</b><p>The model uses an illustrative AED 1.2M average booked unit value and enquiry costs broadly around AED 300-400. The CEO should approve the test, not the forecast. The forecast creates measurable pass/fail criteria.</p></div>`);

  const absorption=[['5/mo','20 months'],['8/mo','13 months'],['10/mo','10 months'],['15/mo','7 months']];
  const sellthrough=section('sellthrough','07 / Sell-through plan','Measure marketing by<br><span class="accent">months of inventory.</span>','The most useful developer metric is how quickly available inventory converts into net bookings. Until live inventory is provided, this shows the absorption speed for every 100 available units.',`
    <div class="absorption-grid">${absorption.map((a,i)=>`<div class="absorption-card ${i===2?'ceo-glow':''}"><b>${a[0]}</b><strong>${a[1]}</strong><span>to sell 100 available units</span></div>`).join('')}</div>
    <div class="ceo-insight"><b>CEO use</b><p>Replace 100 with actual unsold, marketable inventory and use net bookings after cancellations. Plan marketing, brokers and sales capacity backward from the desired sell-through date.</p></div>`);

  const brokerSteps=[
    ['01','Recruit and segment','Separate active producers, international partners, specialists and dormant registrations.'],
    ['02','Activate weekly','Project training, availability updates, construction proof, payment-plan clarity and sales talking points.'],
    ['03','Equip to sell','One-click campaign kits, floorplans, videos, FAQs, price lists and approved investor materials.'],
    ['04','Measure to booking','Track registered leads, viewings, bookings, cancellations and revenue by broker and market.']
  ];
  const brokers=section('brokers','08 / Broker growth plan','Treat brokers as a<br><span class="accent">revenue channel.</span>','Broker registration alone is not a strategy. Tasmeer should manage brokers like a commercial funnel with activation, enablement, lead registration and booking attribution.',`
    <div class="broker-model"><div class="broker-steps">${brokerSteps.map(b=>`<div class="broker-step"><i>${b[0]}</i><div><h3>${b[1]}</h3><p>${b[2]}</p></div></div>`).join('')}</div><div class="broker-score ceo-glow"><small>CEO broker dashboard</small><div class="big">4</div><h3>numbers matter</h3><p>Active brokers, registered buyer opportunities, broker-generated viewings and broker-generated bookings. Everything else is supporting activity.</p></div></div>`);

  const scoreItems=[
    ['Investment','Spend','Actual marketing investment versus approved budget.'],['Demand quality','Qualified','Buyers meeting project, budget and timing criteria.'],['Sales intent','Viewings','Site visits, video calls or serious project consultations.'],['Conversion','Bookings','Net reservations after cancellations.'],['Commercial value','AED sales','Booked property value attributed to marketing and brokers.'],['Efficiency','CAC','Marketing investment divided by acquired customers.'],['Channel','Broker sales','Bookings and value produced through brokers.'],['Project health','Units left','Marketable inventory remaining and months of supply.']
  ];
  const ceoscore=section('ceoscore','10 / CEO scorecard','One page.<br><span class="accent">Eight commercial numbers.</span>','The CEO should not have to read platform-level reports. A weekly commercial view should show whether investment is creating sales momentum.',`
    <div class="ceo-score-grid">${scoreItems.map((s,i)=>`<div class="ceo-score ${i===3||i===4?'ceo-glow':''}"><small>${s[0]}</small><b>${s[1]}</b><span>${s[2]}</span></div>`).join('')}</div>
    <div class="ceo-insight"><b>Management rhythm</b><p>Weekly: demand quality, viewings and bookings. Monthly: budget reallocation, CAC, booked property value and months of inventory remaining.</p></div>`);

  const riskItems=[
    ['Gate 01','One inventory truth','Website, portals, CRM, brokers and sales must use the same availability and project facts.'],
    ['Gate 02','Price and payment clarity','Public sources should not show conflicting payment plans or outdated commercial information.'],
    ['Gate 03','Sales response discipline','High-intent enquiries should be contacted fast and reassigned when untouched.'],
    ['Gate 04','Broker activation','Registered brokers must receive current material and be measured on real opportunities.'],
    ['Gate 05','Trust proof','Construction progress, escrow/payment clarity and management visibility must support the sales story.']
  ];
  const risks=section('risks','11 / Risks and decisions','Scale only when the<br><span class="accent">commercial gates are green.</span>','Most marketing failures in property development are not caused by advertising alone. Pricing, inventory, broker confidence and sales execution can destroy good demand.',`
    <div class="ceo-risk-grid">${riskItems.map(r=>`<div class="ceo-risk"><div class="status"></div><small>${r[0]}</small><h3>${r[1]}</h3><p>${r[2]}</p></div>`).join('')}</div>
    <div class="ceo-insight"><b>Decision rule</b><p>Do not increase media spend simply because CPL looks cheap. Increase it when qualified-buyer rate, viewing rate and booking economics are stable and sales capacity can absorb more demand.</p></div>`);

  const executionLinks=[
    ['presence','Audit','Current digital presence','Public footprint, data and channel readiness.'],['positioning','Brand','Positioning strategy','Design, lifestyle, value and proof.'],['funnel','Demand','Growth funnel','Awareness through booking and advocacy.'],['crm','Operations','CRM architecture','Routing, attribution, automation and sales pipeline.'],['paid','Acquisition','Paid-media model','Channel roles and market structure.'],['team','Resources','Team and vendors','What to own internally and what to outsource.'],['kpis','Measurement','Technical KPI system','Marketing metrics beneath the CEO scorecard.'],['sources','Evidence','Research sources','Public data used in this proposal.']
  ];
  const execution=section('execution','12 / Execution model','Commercial strategy first.<br><span class="accent">Technical detail on demand.</span>','The operational marketing system remains available as an appendix for management teams who want the execution detail.',`
    <div class="execution-grid">${executionLinks.map(x=>`<a class="execution-link" data-detail-target="${x[0]}"><small>${x[1]}</small><strong>${x[2]}</strong><p>${x[3]}</p></a>`).join('')}</div><button class="execution-toggle" type="button">Open execution detail</button>`);

  let anchor=overview;
  [market,competition,buyers,investment,projection,sellthrough,brokers].forEach(s=>{anchor.insertAdjacentElement('afterend',s);anchor=s;});
  const rLabel=roadmap.querySelector('.section-label');
  const rTitle=roadmap.querySelector('.display.small');
  if(rLabel) rLabel.textContent='09 / 90-day growth plan';
  if(rTitle) rTitle.innerHTML='Prove first.<br><span class="accent">Scale second.</span>';
  brokers.insertAdjacentElement('afterend',roadmap);
  roadmap.insertAdjacentElement('afterend',ceoscore);
  ceoscore.insertAdjacentElement('afterend',risks);
  risks.insertAdjacentElement('afterend',execution);

  const detailIds=['presence','gaps','positioning','funnel','crm','paid','team','kpis','sources'];
  detailIds.forEach(id=>{
    const s=document.getElementById(id); if(!s) return;
    s.classList.add('execution-detail'); s.hidden=true;
    const back=document.createElement('a'); back.href='#execution'; back.className='appendix-back'; back.textContent='Back to CEO plan'; s.insertBefore(back,s.firstChild);
    main.appendChild(s);
  });
  document.getElementById('close')?.setAttribute('hidden','');

  const sources=document.getElementById('sources');
  const sourceBox=sources?.querySelector('div[style*="margin-top"]');
  const sourceRows=[
    ['DXBinteract - Dubai Market Report, May 2026','Off-plan share, transaction volume, market value and pricing context.','https://dxbinteract.com/market-reports/2026/may'],
    ['Bayut - JVC 1 Bedroom Price Index','Current JVC 1-bedroom price-per-sqft benchmark.','https://www.bayut.com/property-market-analysis/index/sale/1-bedroom-apartments/dubai/jumeirah-village-circle-jvc/'],
    ['Bayut - JVC Projects with 2026 Handover','Comparable launch prices, payment plans and competitive supply.','https://www.bayut.com/s/new-projects-with-handover-2026-in-jvc/'],
    ['Bayut - Tasmeer Indigo Projects','SquareX Residence and SquareX One public commercial references.','https://www.bayut.com/new-projects/developers/tasmeer-indigo-properties/'],
    ['Khaleej Times - Buyer Nationalities 2026','Current international buyer-market ranking signals.','https://www.khaleejtimes.com/business/indian-uk-egyptian-investors-top-dubai-property-buyers-in-2026'],
    ['Property Finder - 2026 Residential Trends','Consumer purchase-intent and ownership trend signals.','https://www.propertyfinder.com/news/property-finder-reveals-key-trends-shaping-dubai-and-abu-dhabis-residential-property-market/']
  ];
  if(sourceBox){
    [...sourceRows].reverse().forEach(row=>{
      const d=document.createElement('div'); d.className='source-card';
      d.innerHTML=`<div><h4>${row[0]}</h4><p>${row[1]}</p></div><a href="${row[2]}" target="_blank" rel="noopener">OPEN ↗</a>`;
      sourceBox.insertBefore(d,sourceBox.firstChild);
    });
  }

  const mainItems=[['overview','Executive view'],['market','Market opportunity'],['competition','Competitive position'],['buyers','Buyer markets'],['investment','Investment plan'],['projection','Revenue projection'],['sellthrough','Sell-through plan'],['brokers','Broker strategy'],['roadmap','90-day growth plan'],['ceoscore','CEO scorecard'],['risks','Risks & decisions'],['execution','Execution model']];
  nav.innerHTML=mainItems.map((x,i)=>`<a href="#${x[0]}">${String(i+1).padStart(2,'0')} / ${x[1]}</a>`).join('');

  document.querySelectorAll('.mobile-next').forEach(x=>x.remove());
  mainItems.slice(0,-1).forEach((x,i)=>{
    const s=document.getElementById(x[0]); const n=mainItems[i+1]; if(!s) return;
    const a=document.createElement('a'); a.className='mobile-next'; a.href='#'+n[0];
    a.innerHTML=`<span>Continue reading</span><strong>${String(i+2).padStart(2,'0')} / ${n[1]}</strong><i aria-hidden="true">→</i>`; s.appendChild(a);
  });

  const drawerNav=document.querySelector('.mobile-drawer-nav');
  if(drawerNav){
    drawerNav.innerHTML=nav.innerHTML;
    drawerNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      document.body.classList.remove('mobile-nav-open');
      document.querySelector('.mobile-menu-btn')?.setAttribute('aria-expanded','false');
      document.querySelector('.mobile-drawer')?.setAttribute('aria-hidden','true');
    }));
  }

  let detailsOpen=false;
  const details=detailIds.map(id=>document.getElementById(id)).filter(Boolean);
  const toggle=document.querySelector('#execution .execution-toggle');
  const setDetails=open=>{detailsOpen=open;details.forEach(s=>s.hidden=!open);if(toggle)toggle.textContent=open?'Hide execution detail':'Open execution detail';};
  toggle?.addEventListener('click',()=>setDetails(!detailsOpen));
  document.querySelectorAll('[data-detail-target]').forEach(a=>a.addEventListener('click',()=>{setDetails(true);setTimeout(()=>document.getElementById(a.dataset.detailTarget)?.scrollIntoView({behavior:'smooth'}),30);}));
  document.querySelectorAll('.appendix-back').forEach(a=>a.addEventListener('click',()=>setDetails(false)));

  const mq=window.matchMedia('(min-width:1051px)');
  const items=mainItems.map((x,i)=>({id:x[0],title:x[1],label:`${String(i+1).padStart(2,'0')} / ${x[1]}`,num:String(i+1).padStart(2,'0')}));
  const chapter=document.createElement('button'); chapter.className='desktop-chapter'; chapter.type='button'; chapter.setAttribute('aria-expanded','false');
  chapter.innerHTML='<span class="desktop-chapter-index">01</span><span class="desktop-chapter-copy"><small>Current chapter</small><span class="desktop-chapter-title">Executive view</span></span><i class="desktop-chapter-chevron">⌄</i>'; document.body.appendChild(chapter);
  const rail=document.createElement('nav'); rail.className='desktop-rail'; rail.innerHTML=items.map(x=>`<button class="desktop-rail-dot" type="button" data-target="${x.id}" data-label="${x.label}" aria-label="Go to ${x.title}"></button>`).join(''); document.body.appendChild(rail);
  const overlay=document.createElement('div'); overlay.className='desktop-chapters-overlay'; overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML=`<div class="desktop-overlay-head"><div><div class="desktop-overlay-kicker">Tasmeer Indigo · CEO growth plan</div><h2>Choose a chapter</h2><p>Move directly to the commercial question you want to review.</p></div><button class="desktop-overlay-close" type="button">×</button></div><nav class="desktop-overlay-grid">${items.map(x=>`<a class="desktop-overlay-link" href="#${x.id}" data-target="${x.id}"><span class="num">${x.num}</span><strong>${x.title}</strong><span>Open chapter ↗</span></a>`).join('')}</nav>`; document.body.appendChild(overlay);

  const closeBtn=overlay.querySelector('.desktop-overlay-close');
  const dots=[...rail.querySelectorAll('.desktop-rail-dot')];
  const olinks=[...overlay.querySelectorAll('.desktop-overlay-link')];
  const cIndex=chapter.querySelector('.desktop-chapter-index');
  const cTitle=chapter.querySelector('.desktop-chapter-title');
  const mobileTitle=document.getElementById('mobile-section-title');
  const setOpen=open=>{if(!mq.matches)open=false;document.body.classList.toggle('desktop-nav-open',open);chapter.setAttribute('aria-expanded',String(open));overlay.setAttribute('aria-hidden',String(!open));if(open)closeBtn?.focus();};
  chapter.addEventListener('click',()=>setOpen(!document.body.classList.contains('desktop-nav-open'))); closeBtn?.addEventListener('click',()=>setOpen(false));
  const jump=id=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});};
  dots.forEach(d=>d.addEventListener('click',()=>jump(d.dataset.target))); olinks.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();jump(a.dataset.target);}));

  const activate=id=>{const x=items.find(z=>z.id===id);if(!x)return;cIndex.textContent=x.num;cTitle.textContent=x.title;dots.forEach(d=>d.classList.toggle('active',d.dataset.target===id));olinks.forEach(a=>a.classList.toggle('active',a.dataset.target===id));document.querySelectorAll('.nav a,.mobile-drawer-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));if(mobileTitle)mobileTitle.textContent=x.label;};
  const observer=new IntersectionObserver(entries=>{const v=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(v[0])activate(v[0].target.id);},{rootMargin:'-22% 0px -58% 0px',threshold:[0,.1,.25,.5]});
  items.forEach(x=>{const s=document.getElementById(x.id);if(s)observer.observe(s);}); activate('overview');

  const normalize=t=>t.replace(/\s*\u2014\s*/g,' - ');
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let node;
  while((node=walker.nextNode())) if(node.nodeValue.includes('\u2014')) node.nodeValue=normalize(node.nodeValue);
  document.title=normalize(document.title);
  document.querySelectorAll('meta[content]').forEach(m=>m.setAttribute('content',normalize(m.getAttribute('content')||'')));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('desktop-nav-open'))setOpen(false);});
})();