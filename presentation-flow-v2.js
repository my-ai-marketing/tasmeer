(()=>{
  const main=document.querySelector('main');
  const nav=document.querySelector('.nav');
  if(!main||!nav) return;

  const polish=document.createElement('link');
  polish.rel='stylesheet';
  polish.href='presentation-polish.css?v=20260820-1912';
  document.head.appendChild(polish);

  const primaryDefs=[
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
  const promotedIds=['presence','funnel','crm','team'];
  const supplementalIds=['gaps','positioning','paid','kpis','sources'];
  const items=primaryDefs.map((x,i)=>({id:x[0],title:x[1],num:String(i+1).padStart(2,'0'),label:`${String(i+1).padStart(2,'0')} / ${x[1]}`}));
  const section=id=>document.getElementById(id);
  const footer=main.querySelector('footer');
  if(!footer||items.some(x=>!section(x.id))) return;

  // Remove the obsolete close chapter and rebuild one explicit document order.
  section('close')?.remove();
  items.forEach(item=>{
    const s=section(item.id);
    s.hidden=false;
    s.classList.remove('execution-detail');
    s.querySelectorAll('.appendix-back').forEach(x=>x.remove());
    main.insertBefore(s,footer);
  });

  // Merge the two presence fact rows into one six-card system.
  const presence=section('presence');
  if(presence){
    const factGrids=[...presence.querySelectorAll(':scope > .grid.g3')];
    if(factGrids.length>1){
      const first=factGrids[0];
      factGrids.slice(1).forEach(grid=>{
        [...grid.children].forEach(card=>first.appendChild(card));
        grid.remove();
      });
      first.classList.add('presence-facts');
      first.style.marginTop='38px';
    }else if(factGrids[0]){
      factGrids[0].classList.add('presence-facts');
    }
  }

  // Renumber all first-class chapters.
  items.forEach(item=>{
    const label=section(item.id)?.querySelector(':scope > .section-label');
    if(label) label.textContent=item.label;
  });

  // Supporting detail sits immediately after the primary story and before the footer.
  supplementalIds.forEach(id=>{
    const s=section(id);
    if(!s) return;
    s.hidden=true;
    s.classList.add('execution-detail');
    s.querySelectorAll('.appendix-back').forEach(x=>x.remove());
    const back=document.createElement('a');
    back.href='#execution';
    back.className='appendix-back';
    back.textContent='Back to growth plan';
    s.insertBefore(back,s.firstChild);
    main.insertBefore(s,footer);
  });

  // Keep the execution chapter focused on the detail that is not already in the main 16.
  const execution=section('execution');
  const executionGrid=execution.querySelector('.execution-grid');
  const supportLinks=[
    ['gaps','Audit','Gap analysis','Structural weaknesses and immediate priorities.'],
    ['positioning','Brand','Positioning strategy','Design, lifestyle, value and proof.'],
    ['paid','Acquisition','Paid-media model','Channel roles, markets and campaign structure.'],
    ['kpis','Measurement','Technical KPI system','Platform and funnel metrics beneath the executive view.'],
    ['sources','Evidence','Research sources','Public data and references used in the proposal.']
  ];
  if(executionGrid) executionGrid.innerHTML=supportLinks.map(x=>`<a class="execution-link" data-support-target="${x[0]}"><small>${x[1]}</small><strong>${x[2]}</strong><p>${x[3]}</p></a>`).join('');

  let toggle=execution.querySelector('.execution-toggle');
  if(toggle){
    const clean=toggle.cloneNode(true);
    toggle.replaceWith(clean);
    toggle=clean;
  }
  let supportOpen=false;
  const setSupport=open=>{
    supportOpen=open;
    supplementalIds.forEach(id=>{const s=section(id);if(s)s.hidden=!open;});
    if(toggle) toggle.textContent=open?'Hide supporting detail':'Open supporting detail';
  };
  toggle?.addEventListener('click',()=>setSupport(!supportOpen));
  executionGrid?.querySelectorAll('[data-support-target]').forEach(link=>link.addEventListener('click',()=>{
    setSupport(true);
    setTimeout(()=>section(link.dataset.supportTarget)?.scrollIntoView({behavior:'smooth',block:'start'}),30);
  }));
  document.addEventListener('click',e=>{
    const back=e.target.closest('.appendix-back');
    if(!back) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    setSupport(false);
    execution.scrollIntoView({behavior:'smooth',block:'start'});
  },true);

  // Rebuild desktop/source navigation and the mobile drawer from the same 16-item dataset.
  nav.innerHTML=items.map(x=>`<a href="#${x.id}">${x.label}</a>`).join('');
  const drawer=document.querySelector('.mobile-drawer-nav');
  if(drawer){
    drawer.innerHTML=nav.innerHTML;
    drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      document.body.classList.remove('mobile-nav-open');
      document.querySelector('.mobile-menu-btn')?.setAttribute('aria-expanded','false');
      document.querySelector('.mobile-drawer')?.setAttribute('aria-hidden','true');
    }));
  }

  // Rebuild exactly fifteen sequential continue-reading links.
  document.querySelectorAll('.mobile-next').forEach(x=>x.remove());
  items.slice(0,-1).forEach((item,i)=>{
    const a=document.createElement('a');
    const next=items[i+1];
    a.className='mobile-next';
    a.href='#'+next.id;
    a.innerHTML=`<span>Continue reading</span><strong>${next.label}</strong><i aria-hidden="true">→</i>`;
    section(item.id)?.appendChild(a);
  });

  // Replace prior desktop controls so the chapter rail always reflects all sixteen sections.
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
  const overlayLinks=[...overlay.querySelectorAll('.desktop-overlay-link')];
  const chapterIndex=chapter.querySelector('.desktop-chapter-index');
  const chapterTitle=chapter.querySelector('.desktop-chapter-title');
  const mobileTitle=document.getElementById('mobile-section-title');
  let activeId='overview';
  let syncing=false;

  const setOpen=open=>{
    if(!mq.matches) open=false;
    document.body.classList.toggle('desktop-nav-open',open);
    chapter.setAttribute('aria-expanded',String(open));
    overlay.setAttribute('aria-hidden',String(!open));
    if(open) close?.focus();
  };
  const jump=id=>{setOpen(false);section(id)?.scrollIntoView({behavior:'smooth',block:'start'});};
  chapter.addEventListener('click',()=>setOpen(!document.body.classList.contains('desktop-nav-open')));
  close?.addEventListener('click',()=>setOpen(false));
  overlay.addEventListener('click',e=>{if(e.target===overlay)setOpen(false);});
  dots.forEach(dot=>dot.addEventListener('click',()=>jump(dot.dataset.target)));
  overlayLinks.forEach(link=>link.addEventListener('click',e=>{e.preventDefault();jump(link.dataset.target);}));

  const activate=id=>{
    const item=items.find(x=>x.id===id);
    if(!item) return;
    activeId=id;
    if(chapterIndex.textContent!==item.num) chapterIndex.textContent=item.num;
    if(chapterTitle.textContent!==item.title) chapterTitle.textContent=item.title;
    dots.forEach(dot=>dot.classList.toggle('active',dot.dataset.target===id));
    overlayLinks.forEach(link=>link.classList.toggle('active',link.dataset.target===id));
    document.querySelectorAll('.nav a,.mobile-drawer-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
    if(mobileTitle&&mobileTitle.textContent!==item.label) mobileTitle.textContent=item.label;
  };

  const syncActive=()=>{
    if(syncing) return;
    syncing=true;
    requestAnimationFrame(()=>{
      const marker=window.innerHeight*.34;
      let current=items[0];
      for(const item of items){
        const s=section(item.id);
        if(!s||s.hidden) continue;
        const r=s.getBoundingClientRect();
        if(r.top<=marker&&r.bottom>=marker){current=item;break;}
        if(r.top<marker) current=item;
      }
      activate(current.id);
      syncing=false;
    });
  };
  window.addEventListener('scroll',syncActive,{passive:true});
  window.addEventListener('resize',syncActive,{passive:true});

  // Older observers may still fire. Re-assert this navigation model after they mutate labels/classes.
  const navigationWatch=new MutationObserver(()=>{
    if(syncing) return;
    queueMicrotask(syncActive);
  });
  if(mobileTitle) navigationWatch.observe(mobileTitle,{subtree:true,childList:true,characterData:true});
  navigationWatch.observe(nav,{subtree:true,attributes:true,attributeFilter:['class']});
  if(drawer) navigationWatch.observe(drawer,{subtree:true,attributes:true,attributeFilter:['class']});

  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('desktop-nav-open'))setOpen(false);});
  mq.addEventListener?.('change',e=>{if(!e.matches)setOpen(false);});
  activate(activeId);
  syncActive();
})();