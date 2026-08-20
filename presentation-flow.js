(()=>{
  const promoted=['presence','funnel','crm','team'];
  const supplemental=['gaps','positioning','paid','kpis','sources'];
  const sections={};
  [...promoted,...supplemental,'overview','market','competition','buyers','investment','projection','sellthrough','brokers','roadmap','ceoscore','risks','execution'].forEach(id=>sections[id]=document.getElementById(id));
  if(!sections.overview||!sections.market||!sections.execution) return;

  promoted.forEach(id=>{
    const s=sections[id];
    if(!s) return;
    s.hidden=false;
    s.classList.remove('execution-detail');
    s.querySelectorAll('.appendix-back').forEach(x=>x.remove());
  });

  // Rebuild the narrative order without duplicating content.
  sections.overview.insertAdjacentElement('afterend',sections.presence);
  sections.buyers.insertAdjacentElement('afterend',sections.funnel);
  sections.funnel.insertAdjacentElement('afterend',sections.crm);
  sections.crm.insertAdjacentElement('afterend',sections.team);

  const items=[
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
  ].map((x,i)=>({id:x[0],title:x[1],num:String(i+1).padStart(2,'0'),label:`${String(i+1).padStart(2,'0')} / ${x[1]}`}));

  // Renumber section labels so the presentation reads continuously.
  items.forEach(item=>{
    const s=document.getElementById(item.id);
    const label=s?.querySelector(':scope > .section-label');
    if(label) label.textContent=item.label;
  });

  // Keep the execution appendix focused on supporting detail only.
  const executionGrid=sections.execution.querySelector('.execution-grid');
  if(executionGrid){
    const links=[
      ['gaps','Audit','Gap analysis','Structural weaknesses and immediate priorities.'],
      ['positioning','Brand','Positioning strategy','Design, lifestyle, value and proof.'],
      ['paid','Acquisition','Paid-media model','Channel roles, markets and campaign structure.'],
      ['kpis','Measurement','Technical KPI system','Platform and funnel metrics beneath the executive view.'],
      ['sources','Evidence','Research sources','Public data and references used in the proposal.']
    ];
    executionGrid.innerHTML=links.map(x=>`<a class="execution-link" data-support-target="${x[0]}"><small>${x[1]}</small><strong>${x[2]}</strong><p>${x[3]}</p></a>`).join('');
  }

  supplemental.forEach(id=>{
    const s=sections[id];
    if(!s) return;
    s.hidden=true;
    s.classList.add('execution-detail');
    s.querySelectorAll('.appendix-back').forEach(x=>x.remove());
    const back=document.createElement('a');
    back.href='#execution';
    back.className='appendix-back';
    back.textContent='Back to growth plan';
    s.insertBefore(back,s.firstChild);
  });

  const oldToggle=sections.execution.querySelector('.execution-toggle');
  let toggle=oldToggle;
  if(oldToggle){
    toggle=oldToggle.cloneNode(true);
    oldToggle.replaceWith(toggle);
  }
  let supportOpen=false;
  const setSupport=open=>{
    supportOpen=open;
    supplemental.forEach(id=>{if(sections[id]) sections[id].hidden=!open;});
    if(toggle) toggle.textContent=open?'Hide supporting detail':'Open supporting detail';
  };
  toggle?.addEventListener('click',()=>setSupport(!supportOpen));
  executionGrid?.querySelectorAll('[data-support-target]').forEach(link=>link.addEventListener('click',()=>{
    setSupport(true);
    setTimeout(()=>document.getElementById(link.dataset.supportTarget)?.scrollIntoView({behavior:'smooth',block:'start'}),30);
  }));
  document.addEventListener('click',e=>{
    const back=e.target.closest('.appendix-back');
    if(!back) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    setSupport(false);
    sections.execution.scrollIntoView({behavior:'smooth',block:'start'});
  },true);

  // Rebuild primary navigation.
  const nav=document.querySelector('.nav');
  if(nav) nav.innerHTML=items.map(x=>`<a href="#${x.id}">${x.label}</a>`).join('');
  const drawer=document.querySelector('.mobile-drawer-nav');
  if(drawer){
    drawer.innerHTML=nav?.innerHTML||'';
    drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      document.body.classList.remove('mobile-nav-open');
      document.querySelector('.mobile-menu-btn')?.setAttribute('aria-expanded','false');
      document.querySelector('.mobile-drawer')?.setAttribute('aria-hidden','true');
    }));
  }

  // Rebuild sequential mobile reading links.
  document.querySelectorAll('.mobile-next').forEach(x=>x.remove());
  items.slice(0,-1).forEach((item,i)=>{
    const s=document.getElementById(item.id);
    const next=items[i+1];
    if(!s) return;
    const a=document.createElement('a');
    a.className='mobile-next';
    a.href='#'+next.id;
    a.innerHTML=`<span>Continue reading</span><strong>${next.label}</strong><i aria-hidden="true">→</i>`;
    s.appendChild(a);
  });

  // Replace the existing desktop chapter controls so numbering matches the expanded flow.
  document.querySelectorAll('.desktop-chapter,.desktop-rail,.desktop-chapters-overlay').forEach(x=>x.remove());
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
  rail.innerHTML=items.map(x=>`<button class="desktop-rail-dot" type="button" data-target="${x.id}" data-label="${x.label}" aria-label="Go to ${x.title}"></button>`).join('');
  document.body.appendChild(rail);

  const overlay=document.createElement('div');
  overlay.className='desktop-chapters-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML=`<div class="desktop-overlay-head"><div><div class="desktop-overlay-kicker">Tasmeer Indigo · Commercial growth plan</div><h2>Choose a chapter</h2><p>Move directly to the commercial question or operating section you want to review.</p></div><button class="desktop-overlay-close" type="button" aria-label="Close chapter navigation">×</button></div><nav class="desktop-overlay-grid" aria-label="All presentation chapters">${items.map(x=>`<a class="desktop-overlay-link" href="#${x.id}" data-target="${x.id}"><span class="num">${x.num}</span><strong>${x.title}</strong><span>Open chapter ↗</span></a>`).join('')}</nav>`;
  document.body.appendChild(overlay);

  const mq=window.matchMedia('(min-width:1051px)');
  const close=overlay.querySelector('.desktop-overlay-close');
  const dots=[...rail.querySelectorAll('.desktop-rail-dot')];
  const olinks=[...overlay.querySelectorAll('.desktop-overlay-link')];
  const cIndex=chapter.querySelector('.desktop-chapter-index');
  const cTitle=chapter.querySelector('.desktop-chapter-title');
  const mobileTitle=document.getElementById('mobile-section-title');

  const setOpen=open=>{
    if(!mq.matches) open=false;
    document.body.classList.toggle('desktop-nav-open',open);
    chapter.setAttribute('aria-expanded',String(open));
    overlay.setAttribute('aria-hidden',String(!open));
    if(open) close?.focus();
  };
  const jump=id=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});};
  chapter.addEventListener('click',()=>setOpen(!document.body.classList.contains('desktop-nav-open')));
  close?.addEventListener('click',()=>setOpen(false));
  overlay.addEventListener('click',e=>{if(e.target===overlay)setOpen(false);});
  dots.forEach(d=>d.addEventListener('click',()=>jump(d.dataset.target)));
  olinks.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();jump(a.dataset.target);}));

  const activate=id=>{
    const x=items.find(z=>z.id===id);
    if(!x) return;
    cIndex.textContent=x.num;
    cTitle.textContent=x.title;
    dots.forEach(d=>d.classList.toggle('active',d.dataset.target===id));
    olinks.forEach(a=>a.classList.toggle('active',a.dataset.target===id));
    document.querySelectorAll('.nav a,.mobile-drawer-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
    if(mobileTitle) mobileTitle.textContent=x.label;
  };

  let ticking=false;
  const syncActive=()=>{
    ticking=false;
    const marker=window.innerHeight*.34;
    let current=items[0];
    for(const item of items){
      const s=document.getElementById(item.id);
      if(!s||s.hidden) continue;
      const r=s.getBoundingClientRect();
      if(r.top<=marker&&r.bottom>=marker){current=item;break;}
      if(r.top<marker) current=item;
    }
    activate(current.id);
  };
  window.addEventListener('scroll',()=>{
    if(ticking) return;
    ticking=true;
    requestAnimationFrame(()=>{syncActive();setTimeout(syncActive,0);});
  },{passive:true});
  window.addEventListener('resize',syncActive,{passive:true});
  syncActive();

  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('desktop-nav-open'))setOpen(false);});
})();