(()=>{
  const main=document.querySelector('main');
  const nav=document.querySelector('.nav');
  if(!main||!nav) return;

  const growthStyle=document.createElement('link');
  growthStyle.rel='stylesheet';
  growthStyle.href='ceo-growth.css?v=20260820-1824';
  document.head.appendChild(growthStyle);

  const navStyle=document.createElement('link');
  navStyle.rel='stylesheet';
  navStyle.href='desktop-nav.css?v=20260820-1754';
  document.head.appendChild(navStyle);

  const layoutFix=document.createElement('link');
  layoutFix.rel='stylesheet';
  layoutFix.href='layout-fix.css?v=20260820-1759';
  document.head.appendChild(layoutFix);

  const overview=document.getElementById('overview');
  const presence=document.getElementById('presence');
  const roadmap=document.getElementById('roadmap');
  if(!overview||!presence||!roadmap) return;

  const heroTitle=overview.querySelector('.display');
  const heroLede=overview.querySelector('.lede');
  const heroChips=overview.querySelector('.chips');
  const heroQuote=overview.querySelector('.quote');
  if(heroTitle) heroTitle.innerHTML='From marketing activity<br>to <span class="accent">commercial growth.</span>';
  if(heroLede) heroLede.textContent='A CEO-level plan to turn Tasmeer Indigo\'s projects, broker network and marketing investment into measurable buyer demand, bookings, sell-through and revenue.';
  if(heroChips) heroChips.innerHTML='<span class="chip">Market opportunity</span><span class="chip">Competitive position</span><span class="chip">Buyer markets</span><span class="chip">Investment scenarios</span><span class="chip">Revenue projection</span><span class="chip">Sell-through plan</span>';
  if(heroQuote) heroQuote.textContent='The question is not how much marketing we can do. The question is how efficiently we can convert controlled investment into qualified buyers, bookings and project sell-through.';

  function makeSection(id,label,title,lede,body){
    const s=document.createElement('section');
    s.id=id;
    s.innerHTML=`<div class="section-label">${label}</div><h2 class="display small">${title}</h2>${lede?`<p class="lede">${lede}</p>`:''}${body}`;
    return s;
  }

  const market=makeSection('market','02 / Market opportunity','The market is active.<br><span class="accent">The buyer is more selective.</span>','Dubai remains heavily driven by primary and off-plan sales, but 2026 data also shows softer transaction volumes. Tasmeer should treat this as a quality-of-offer and quality-of-execution market, not a volume-at-any-cost market.',`
    <div class="ceo-stat-grid">
      <div class="ceo-stat ceo-glow"><small>Dubai, May 2026</small><div><strong>74%</strong><p>of apartment, villa and commercial sales volume was primary/off-plan.</p></div></div>
      <div class="ceo-stat"><small>JVC 1-bed benchmark</small><div><strong>AED 1,463</strong><p>per sqft current Bayut index for 1-bedroom apartments in JVC.</p></div></div>
      <div class="ceo-stat"><small>Competitive density</small><div><strong>73</strong><p>JVC projects listed by Bayut with handover by 2026.</p></div></div>
      <div class="ceo-stat"><small>Tasmeer entry point</small><div><strong>AED 692K</strong><p>SquareX Residence starting price published by Tasmeer.</p></div></div>
    </div>
    <div class="ceo-insight"><b>CEO interpretation</b><p>Tasmeer is selling into a large off-plan market, but JVC buyers have many alternatives. The commercial advantage must come from project proof, competitive pricing, payment clarity, broker confidence and fast sales follow-up.</p></div>
    <div class="ceo-source-note">Market signals: <a href="https://dxbinteract.com/market-reports/2026/may" target="_blank" rel="noopener">DXBinteract May 2026</a> · <a href="https://www.bayut.com/property-market-analysis/index/sale/1-bedroom-apartments/dubai/jumeirah-village-circle-jvc/" target="_blank" rel="noopener">Bayut JVC 1-bed index</a> · <a href="https://www.bayut.com/s/new-projects-with-handover-2026-in-jvc/" target="_blank" rel="noopener">Bayut JVC supply list</a></div>`);

  const competition=makeSection('competition','03 / Competitive position','Tasmeer is not the cheapest.<br><span class="accent">That can be an advantage.</span>','SquareX Residence sits close to the mainstream JVC launch-price band. That means the brand should compete on product quality, amenities, trust and execution rather than trying to win a price war.',`
    <div class="competitor-wrap"><table class="competitor-table"><thead><tr><th>Project</th><th>Developer</th><th>Launch price</th><th>Payment plan</th><th>Handover</th><th>CEO read</th></tr></thead><tbody>
      <tr class="tasmeer-row"><td><strong>SquareX Residence</strong></td><td>Tasmeer Indigo</td><td class="price">AED 692K</td><td>70/30 official<br><span class="fit">Bayut currently shows 63/37</span></td><td>Q4 2026</td><td class="fit">Mainstream entry price. Public payment-plan data should be reconciled.</td></tr>
      <tr><td><strong>The F1fth</strong></td><td>Object One</td><td class="price">AED 554K</td><td>60/40</td><td>Q4 2026</td><td class="fit">Lower-price competitor.</td></tr>
      <tr><td><strong>Luxor</strong></td><td>Imtiaz</td><td class="price">AED 676K</td><td>60/40</td><td>Q4 2026</td><td class="fit">Very close price competitor.</td></tr>
      <tr><td><strong>Elitz 3</strong></td><td>Danube</td><td class="price">AED 699K</td><td>64/36</td><td>Q4 2026</td><td class="fit">Near-identical entry price with stronger developer awareness.</td></tr>
      <tr><td><strong>Samana Manhattan</strong></td><td>Samana</td><td class="price">AED 689K</td><td>100/0</td><td>Q4 2026</td><td class="fit">Near-identical entry price with aggressive payment structure.</td></tr>
      <tr><td><strong>Hillmont Residences</strong></td><td>Ellington</td><td class="price">AED 1.33M</td><td>70/30</td><td>Q4 2026</td><td class="fit">Premium-price reference point.</td></tr>
    </tbody></table></div>
    <div class="ceo-insight"><b>Where Tasmeer can win</b><p>Do not position SquareX as simply another JVC apartment launch. Own the middle ground: design-led product, strong amenity value, transparent construction proof, straightforward investor education and a broker experience that is faster than larger competitors.</p></div>
    <div class="ceo-source-note">Comparable launch data from Bayut's JVC 2026 project listings. Tasmeer payment plan should be verified internally because current public sources differ.</div>`);

  const buyers=makeSection('buyers','04 / Buyer markets','Focus budget where buyer demand<br><span class="accent">already exists.</span>','Brokerage datasets differ on exact rankings, but India and the UK consistently appear among Dubai\'s largest foreign buyer groups. UAE residents should remain a separate high-intent segment because they can view and convert locally.',`
    <div class="ceo-market-grid">
      <div class="ceo-market-card ceo-glow"><small>Priority market</small><span class="tier">Tier 1</span><h3>India</h3><p>Investor education, remote purchase confidence, payment structure and Dubai diversification.</p><div class="why">2026 market data cited by Khaleej Times places Indian buyers among the largest foreign buyer groups.</div></div>
      <div class="ceo-market-card ceo-glow"><small>Priority market</small><span class="tier">Tier 1</span><h3>United Kingdom</h3><p>Yield, diversification, near-ready proof, ownership process and currency-aware investment messaging.</p><div class="why">UK buyers also rank among the strongest foreign buyer groups across recent brokerage datasets.</div></div>
      <div class="ceo-market-card"><small>Local conversion</small><span class="tier">Tier 1</span><h3>UAE residents</h3><p>Own-versus-rent, first-time purchase, lifestyle, viewing convenience and immediate sales follow-up.</p><div class="why">Property Finder reported strong purchase intent among its consumer respondents entering 2026.</div></div>
      <div class="ceo-market-card"><small>Arabic growth</small><span class="tier">Tier 2</span><h3>Egypt + Saudi/GCC</h3><p>Arabic creative, regional proximity, second-home logic, family use and relationship-led broker sales.</p><div class="why">Egypt and Saudi Arabia also appear in current foreign-buyer rankings.</div></div>
    </div>
    <div class="ceo-insight"><b>Budget rule</b><p>Do not split spend equally across countries. Start with UAE resident, India and UK campaigns, then move budget based on qualified-buyer rate, viewing rate and booking rate. Add Arabic markets as a separately measured growth cluster.</p></div>
    <div class="ceo-source-note">Buyer signals: <a href="https://www.khaleejtimes.com/business/indian-uk-egyptian-investors-top-dubai-property-buyers-in-2026" target="_blank" rel="noopener">Khaleej Times, July 2026</a> · <a href="https://www.propertyfinder.com/news/property-finder-reveals-key-trends-shaping-dubai-and-abu-dhabis-residential-property-market/" target="_blank" rel="noopener">Property Finder 2026 trends</a></div>`);

  const investment=makeSection('investment','05 / Marketing investment plan','Start with <span class="accent">AED 100K.</span><br>Earn the right to scale.','The first budget should validate buyer quality and sales conversion. AED 250K and AED 500K are scale scenarios, not day-one commitments.',`
    <div class="ceo-plan-grid">
      <div class="ceo-plan-card recommended"><small>Validation</small><div class="budget">AED 100K</div><h3>Recommended first approval</h3><p>Prove which markets, channels, messages and sales follow-up create qualified demand.</p><ul><li><span>Decision horizon</span><b>30-45 days</b></li><li><span>Main objective</span><b>Prove conversion</b></li><li><span>Scale rule</span><b>Only on evidence</b></li></ul></div>
      <div class="ceo-plan-card"><small>Growth</small><div class="budget">AED 250K</div><h3>Scale proven campaigns</h3><p>Increase spend only after the validation phase identifies reliable qualified-buyer and booking economics.</p><ul><li><span>Decision horizon</span><b>45-90 days</b></li><li><span>Main objective</span><b>Increase bookings</b></li><li><span>Requirement</span><b>Stable CAC</b></li></ul></div>
      <div class="ceo-plan-card"><small>Acceleration</small><div class="budget">AED 500K</div><h3>Project-level sales push</h3><p>Use only when inventory, pricing, sales capacity and channel performance justify a larger commercial push.</p><ul><li><span>Decision horizon</span><b>After proof</b></li><li><span>Main objective</span><b>Sell-through</b></li><li><span>Requirement</span><b>Revenue evidence</b></li></ul></div>
    </div>
    <div class="ceo-allocation"><div><b>60%</b><span>Paid media</span></div><div><b>15%</b><span>Portals</span></div><div><b>10%</b><span>Content</span></div><div><b>5%</b><span>CRM + tracking</span></div><div><b>5%</b><span>Broker activation</span></div><div><b>5%</b><span>Testing reserve</span></div></div>
    <div class="ceo-source-note">Illustrative allocation for the first controlled investment. Actual split should change based on project margin, inventory, portal contracts and conversion data.</div>`);

  const projection=makeSection('projection','06 / Revenue projection','Turn AED 100K into a<br><span class="accent">commercial hypothesis.</span>','The forecast below is deliberately conservative and should be treated as a planning model. It is not a performance promise. Replace every assumption with Tasmeer\'s real data after the first 30-45 days.',`
    <div class="projection-grid">
      <div class="projection-card"><small>Conservative</small><h3>Proof is weak but useful</h3><div class="projection-step"><span>Enquiries</span><b>250</b></div><div class="projection-step"><span>Qualified buyers</span><b>75</b></div><div class="projection-step"><span>Viewings / serious calls</span><b>20</b></div><div class="projection-step"><span>Bookings</span><b>2</b></div><div class="sales-value"><b>AED 2.4M</b><span>illustrative booked property value</span></div></div>
      <div class="projection-card base ceo-glow"><small>Base planning case</small><h3>Target validation outcome</h3><div class="projection-step"><span>Enquiries</span><b>290</b></div><div class="projection-step"><span>Qualified buyers</span><b>90</b></div><div class="projection-step"><span>Viewings / serious calls</span><b>26</b></div><div class="projection-step"><span>Bookings</span><b>3</b></div><div class="sales-value"><b>AED 3.6M</b><span>illustrative booked property value</span></div></div>
      <div class="projection-card"><small>Strong</small><h3>Evidence supports scaling</h3><div class="projection-step"><span>Enquiries</span><b>330</b></div><div class="projection-step"><span>Qualified buyers</span><b>105</b></div><div class="projection-step"><span>Viewings / serious calls</span><b>32</b></div><div class="projection-step"><span>Bookings</span><b>4</b></div><div class="sales-value"><b>AED 4.8M</b><span>illustrative booked property value</span></div></div>
    </div>
    <div class="ceo-insight"><b>Planning assumptions</b><p>The model uses an illustrative AED 1.2M average booked unit value and assumes total enquiry costs broadly around AED 300-400. The CEO should approve the test, not the forecast. The forecast exists to create measurable pass/fail criteria.</p></div>`);

  const sellthrough=makeSection('sellthrough','07 / Sell-through plan','Measure marketing by<br><span class="accent">months of inventory.</span>','The most useful developer metric is not lead volume. It is how quickly available inventory can be converted into net bookings. Until live inventory is provided, the framework below shows the absorption speed for every 100 available units.',`
    <div class="absorption-grid">
      <div class="absorption-card"><b>5/mo</b><strong>20 months</strong><span>to sell 100 available units</span></div>
      <div class="absorption-card"><b>8/mo</b><strong>13 months</strong><span>to sell 100 available units</span></div>
      <div class="absorption-card ceo-glow"><b>10/mo</b><strong>10 months</strong><span>to sell 100 available units</span></div>
      <div class="absorption-card"><b>15/mo</b><strong>7 months</strong><span>to sell 100 available units</span></div>
    </div>
    <div class="ceo-insight"><b>CEO use</b><p>Replace 100 with actual unsold, marketable inventory and use net bookings after cancellations. Then marketing, broker activity and sales capacity can be planned backward from the desired sell-through date.</p></div>`);

  const brokers=makeSection('brokers','08 / Broker growth plan','Treat brokers as a<br><span class="accent">revenue channel.</span>','Broker registration alone is not a strategy. Tasmeer should manage brokers like a commercial funnel with activation, enablement, lead registration and booking attribution.',`
    <div class="broker-model"><div class="broker-steps">
      <div class="broker-step"><i>01</i><div><h3>Recruit and segment</h3><p>Separate active producers, international partners, specialists and dormant registrations.</p></div></div>
      <div class="broker-step"><i>02</i><div><h3>Activate weekly</h3><p>Project training, availability updates, construction proof, payment-plan clarity and sales talking points.</p></div></div>
      <div class="broker-step"><i>03</i><div><h3>Equip to sell</h3><p>One-click campaign kits, floorplans, videos, FAQs, price lists and approved investor materials.</p></div></div>
      <div class="broker-step"><i>04</i><div><h3>Measure to booking</h3><p>Track registered leads, viewings, bookings, cancellations and revenue by broker and market.</p></div></div>
    </div><div class="broker-score ceo-glow"><small>CEO broker dashboard</small><div class="big">4</div><h3>numbers matter</h3><p>Active brokers, registered buyer opportunities, broker-generated viewings and broker-generated bookings. Everything else is supporting activity.</p></div></div>`);

  const ceoscore=makeSection('ceoscore','10 / CEO scorecard','One page.<br><span class="accent">Eight commercial numbers.</span>','The CEO should not have to read platform-level marketing reports. A weekly commercial view should show whether investment is creating sales momentum.',`
    <div class="ceo-score-grid">
      <div class="ceo-score"><small>Investment</small><b>Spend</b><span>Actual marketing investment versus approved budget.</span></div>
      <div class="ceo-score"><small>Demand quality</small><b>Qualified</b><span>Buyers meeting project, budget and timing criteria.</span></div>
      <div class="ceo-score"><small>Sales intent</small><b>Viewings</b><span>Site visits, video calls or serious project consultations.</span></div>
      <div class="ceo-score ceo-glow"><small>Conversion</small><b>Bookings</b><span>Net reservations after cancellations.</span></div>
      <div class="ceo-score ceo-glow"><small>Commercial value</small><b>AED sales</b><span>Booked property value attributed to marketing and brokers.</span></div>
      <div class="ceo-score"><small>Efficiency</small><b>CAC</b><span>Marketing investment divided by acquired customers.</span></div>
      <div class="ceo-score"><small>Channel</small><b>Broker sales</b><span>Bookings and value produced through brokers.</span></div>
      <div class="ceo-score"><small>Project health</small><b>Units left</b><span>Marketable inventory remaining and months of supply.</span></div>
    </div>
    <div class="ceo-insight"><b>Management rhythm</b><p>Weekly: demand quality, viewings and bookings. Monthly: budget reallocation, CAC, booked property value and months of inventory remaining.</p></div>`);

  const risks=makeSection('risks','11 / Risks and decisions','Scale only when the<br><span class="accent">commercial gates are green.</span>','Most marketing failures in property development are not caused by advertising alone. Pricing, inventory, broker confidence and sales execution can destroy good demand.',`
    <div class="ceo-risk-grid">
      <div class="ceo-risk"><div class="status"></div><small>Gate 01</small><h3>One inventory truth</h3><p>Website, portals, CRM, brokers and sales must use the same availability and project facts.</p></div>
      <div class="ceo-risk"><div class="status"></div><small>Gate 02</small><h3>Price and payment clarity</h3><p>Public sources should not show conflicting payment plans or outdated commercial information.</p></div>
      <div class="ceo-risk"><div class="status"></div><small>Gate 03</small><h3>Sales response discipline</h3><p>High-intent enquiries should be contacted fast and reassigned when untouched.</p></div>
      <div class="ceo-risk"><div class="status"></div><small>Gate 04</small><h3>Broker activation</h3><p>Registered brokers must receive current material and be measured on real opportunities.</p></div>
      <div class="ceo-risk"><div class="status"></div><small>Gate 05</small><h3>Trust proof</h3><p>Construction progress, escrow/payment clarity and management visibility must support the sales story.</p></div>
    </div>
    <div class="ceo-insight"><b>Decision rule</b><p>Do not increase media spend simply because CPL looks cheap. Increase it when qualified-buyer rate, viewing rate and booking economics are stable and sales capacity can absorb more demand.</p></div>`);

  const execution=makeSection('execution','12 / Execution model','Commercial strategy first.<br><span class="accent">Technical detail on demand.</span>','The operational marketing system remains available as an appendix for management teams who need to inspect how the commercial plan will be executed.',`
    <div class="execution-grid">
      <a class="execution-link" data-detail-target="presence"><small>Audit</small><strong>Current digital presence</strong><p>Public footprint, data and channel readiness.</p></a>
      <a class="execution-link" data-detail-target="positioning"><small>Brand</small><strong>Positioning strategy</strong><p>Design, lifestyle, value and proof.</p></a>
      <a class="execution-link" data-detail-target="funnel"><small>Demand</small><strong>Growth funnel</strong><p>Awareness through booking and advocacy.</p></a>
      <a class="execution-link" data-detail-target="crm"><small>Operations</small><strong>CRM architecture</strong><p>Routing, attribution, automation and sales pipeline.</p></a>
      <a class="execution-link" data-detail-target="paid"><small>Acquisition</small><strong>Paid-media model</strong><p>Channel roles and market structure.</p></a>
      <a class="execution-link" data-detail-target="team"><small>Resources</small><strong>Team and vendors</strong><p>What to own internally and what to outsource.</p></a>
      <a class="execution-link" data-detail-target="kpis"><small>Measurement</small><strong>Technical KPI system</strong><p>Marketing metrics beneath the CEO scorecard.</p></a>
      <a class="execution-link" data-detail-target="sources"><small>Evidence</small><strong>Research sources</strong><p>Public data used in this proposal.</p></a>
    </div><button class="execution-toggle" type="button">Open execution detail</button>`);

  const newSections=[market,competition,buyers,investment,projection,sellthrough,brokers];
  let anchor=overview;
  newSections.forEach(s=>{anchor.insertAdjacentElement('afterend',s);anchor=s;});

  const roadmapLabel=roadmap.querySelector('.section-label');
  const roadmapTitle=roadmap.querySelector('.display.small');
  if(roadmapLabel) roadmapLabel.textContent='09 / 90-day growth plan';
  if(roadmapTitle) roadmapTitle.innerHTML='Prove first.<br><span class="accent">Scale second.</span>';

  brokers.insertAdjacentElement('afterend',roadmap);
  roadmap.insertAdjacentElement('afterend',ceoscore);
  ceoscore.insertAdjacentElement('afterend',risks);
  risks.insertAdjacentElement('afterend',execution);

  const detailIds=['presence','gaps','positioning','funnel','crm','paid','team','kpis','sources'];
  detailIds.forEach(id=>{
    const s=document.getElementById(id);
    if(!s) return;
    s.classList.add('execution-detail');
    s.hidden=true;
    if(!s.querySelector('.appendix-back')){
      const back=document.createElement('a');
      back.href='#execution';
      back.className='appendix-back';
      back.textContent='Back to CEO plan';
      s.insertBefore(back,s.firstChild);
    }
    main.appendChild(s);
  });
  const closeSection=document.getElementById('close');
  if(closeSection) closeSection.hidden=true;

  const sources=document.getElementById('sources');
  if(sources){
    const sourceContainer=sources.querySelector('div[style*="margin-top"]');
    const extraSources=[
      ['DXBinteract - Dubai Market Report, May 2026','Off-plan share, transaction volume, market value and pricing context.','https://dxbinteract.com/market-reports/2026/may'],
      ['Bayut - JVC 1 Bedroom Price Index','Current JVC 1-bedroom price-per-sqft benchmark.','https://www.bayut.com/property-market-analysis/index/sale/1-bedroom-apartments/dubai/jumeirah-village-circle-jvc/'],
      ['Bayut - JVC Projects with 2026 Handover','Comparable project launch prices, payment plans and competitive supply.','https://www.bayut.com/s/new-projects-with-handover-2026-in-jvc/'],
      ['Bayut - Tasmeer Indigo Projects','SquareX Residence and SquareX One launch-price, payment-plan and handover references.','https://www.bayut.com/new-projects/developers/tasmeer-indigo-properties/'],
      ['Khaleej Times - Dubai Buyer Nationalities 2026','Current international buyer-market ranking signals.','https://www.khaleejtimes.com/business/indian-uk-egyptian-investors-top-dubai-property-buyers-in-2026'],
      ['Property Finder - 2026 Residential Trends','Consumer purchase-intent and ownership trend signals entering 2026.','https://www.propertyfinder.com/news/property-finder-reveals-key-trends-shaping-dubai-and-abu-dhabis-residential-property-market/']
    ];
    if(sourceContainer&&!document.getElementById('source-ceo-market')){
      extraSources.reverse().forEach((item,index)=>{
        const d=document.createElement('div');
        d.className='source-card';
        if(index===0) d.id='source-ceo-market';
        d.innerHTML=`<div><h4>${item[0]}</h4><p>${item[1]}</p></div><a href="${item[2]}" target="_blank" rel="noopener">OPEN ↗</a>`;
        sourceContainer.insertBefore(d,sourceContainer.firstChild);
      });
    }
  }

  const mainItems=[
    ['overview','Executive view'],['market','Market opportunity'],['competition','Competitive position'],['buyers','Buyer markets'],['investment','Investment plan'],['projection','Revenue projection'],['sellthrough','Sell-through plan'],['brokers','Broker strategy'],['roadmap','90-day growth plan'],['ceoscore','CEO scorecard'],['risks','Risks & decisions'],['execution','Execution model']
  ];
  nav.innerHTML=mainItems.map((item,i)=>`<a href="#${item[0]}">${String(i+1).padStart(2,'0')} / ${item[1]}</a>`).join('');

  document.querySelectorAll('.mobile-next').forEach(el=>el.remove());
  mainItems.forEach((item,index)=>{
    if(index===mainItems.length-1) return;
    const s=document.getElementById(item[0]);
    if(!s) return;
    const next=mainItems[index+1];
    const a=document.createElement('a');
    a.className='mobile-next';
    a.href='#'+next[0];
    a.innerHTML=`<span>Continue reading</span><strong>${String(index+2).padStart(2,'0')} / ${next[1]}</strong><i aria-hidden="true">→</i>`;
    s.appendChild(a);
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
  const detailSections=detailIds.map(id=>document.getElementById(id)).filter(Boolean);
  const toggle=document.querySelector('#execution .execution-toggle');
  function setDetails(open){
    detailsOpen=open;
    detailSections.forEach(s=>s.hidden=!open);
    if(toggle) toggle.textContent=open?'Hide execution detail':'Open execution detail';
  }
  toggle?.addEventListener('click',()=>setDetails(!detailsOpen));
  document.querySelectorAll('[data-detail-target]').forEach(link=>link.addEventListener('click',()=>{
    setDetails(true);
    const target=document.getElementById(link.dataset.detailTarget);
    setTimeout(()=>target?.scrollIntoView({behavior:'smooth',block:'start'}),30);
  }));
  document.querySelectorAll('.appendix-back').forEach(a=>a.addEventListener('click',()=>setDetails(false)));

  const mq=window.matchMedia('(min-width:1051px)');
  const items=mainItems.map((item,index)=>({id:item[0],title:item[1],label:`${String(index+1).padStart(2,'0')} / ${item[1]}`,num:String(index+1).padStart(2,'0')}));

  const chapter=document.createElement('button');
  chapter.className='desktop-chapter';
  chapter.type='button';
  chapter.setAttribute('aria-label','Open chapter navigation');
  chapter.setAttribute('aria-expanded','false');
  chapter.innerHTML='<span class="desktop-chapter-index">01</span><span class="desktop-chapter-copy"><small>Current chapter</small><span class="desktop-chapter-title">Executive view</span></span><i class="desktop-chapter-chevron">⌄</i>';
  document.body.appendChild(chapter);

  const rail=document.createElement('nav');
  rail.className='desktop-rail';
  rail.setAttribute('aria-label','Section progress');
  rail.innerHTML=items.map(item=>`<button class="desktop-rail-dot" type="button" data-target="${item.id}" data-label="${item.label}" aria-label="Go to ${item.title}"></button>`).join('');
  document.body.appendChild(rail);

  const overlay=document.createElement('div');
  overlay.className='desktop-chapters-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML=`<div class="desktop-overlay-head"><div><div class="desktop-overlay-kicker">Tasmeer Indigo · CEO growth plan</div><h2>Choose a chapter</h2><p>Move directly to the commercial question you want to review.</p></div><button class="desktop-overlay-close" type="button" aria-label="Close chapter navigation">×</button></div><nav class="desktop-overlay-grid" aria-label="All strategy chapters">${items.map(item=>`<a class="desktop-overlay-link" href="#${item.id}" data-target="${item.id}"><span class="num">${item.num}</span><strong>${item.title}</strong><span>Open chapter ↗</span></a>`).join('')}</nav>`;
  document.body.appendChild(overlay);

  const closeButton=overlay.querySelector('.desktop-overlay-close');
  const railDots=[...rail.querySelectorAll('.desktop-rail-dot')];
  const overlayLinks=[...overlay.querySelectorAll('.desktop-overlay-link')];
  const chapterIndex=chapter.querySelector('.desktop-chapter-index');
  const chapterTitle=chapter.querySelector('.desktop-chapter-title');
  const mobileSectionTitle=document.getElementById('mobile-section-title');

  function setOpen(open){
    if(!mq.matches) open=false;
    document.body.classList.toggle('desktop-nav-open',open);
    chapter.setAttribute('aria-expanded',String(open));
    overlay.setAttribute('aria-hidden',String(!open));
    if(open) closeButton?.focus();
  }
  chapter.addEventListener('click',()=>setOpen(!document.body.classList.contains('desktop-nav-open')));
  closeButton?.addEventListener('click',()=>setOpen(false));
  overlay.addEventListener('click',e=>{if(e.target===overlay) setOpen(false);});

  function jumpTo(id){
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  }
  railDots.forEach(dot=>dot.addEventListener('click',()=>jumpTo(dot.dataset.target)));
  overlayLinks.forEach(link=>link.addEventListener('click',e=>{e.preventDefault();jumpTo(link.dataset.target);}));

  let activeId='overview';
  function activate(id){
    const item=items.find(x=>x.id===id);
    if(!item) return;
    activeId=id;
    chapterIndex.textContent=item.num;
    chapterTitle.textContent=item.title;
    railDots.forEach(dot=>dot.classList.toggle('active',dot.dataset.target===id));
    overlayLinks.forEach(link=>link.classList.toggle('active',link.dataset.target===id));
    document.querySelectorAll('.nav a,.mobile-drawer-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
    if(mobileSectionTitle) mobileSectionTitle.textContent=item.label;
  }

  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
    if(visible[0]) activate(visible[0].target.id);
  },{rootMargin:'-22% 0px -58% 0px',threshold:[0,.1,.25,.5]});
  items.forEach(item=>{const s=document.getElementById(item.id);if(s) observer.observe(s);});
  activate(activeId);

  const normalizePunctuation=text=>text.replace(/\s*\u2014\s*/g,' - ');
  const textWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let textNode;
  while((textNode=textWalker.nextNode())) if(textNode.nodeValue.includes('\u2014')) textNode.nodeValue=normalizePunctuation(textNode.nodeValue);
  document.title=normalizePunctuation(document.title);
  document.querySelectorAll('meta[content]').forEach(meta=>meta.setAttribute('content',normalizePunctuation(meta.getAttribute('content')||'')));

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&document.body.classList.contains('desktop-nav-open')){e.preventDefault();setOpen(false);chapter.focus();}
  });
  mq.addEventListener?.('change',e=>{if(!e.matches) setOpen(false);});
})();