(()=>{
  const mq=window.matchMedia('(min-width:1051px)');
  const sections=[...document.querySelectorAll('main section')];
  const sourceLinks=[...document.querySelectorAll('.nav a')];
  if(!sections.length||!sourceLinks.length) return;

  const items=sourceLinks.map((link,index)=>({
    href:link.getAttribute('href'),
    label:link.textContent.trim(),
    num:String(index+1).padStart(2,'0'),
    title:link.textContent.replace(/^\d+\s*\/\s*/,'').trim(),
    id:link.getAttribute('href').replace('#','')
  }));

  const style=document.createElement('link');
  style.rel='stylesheet';
  style.href='desktop-nav.css?v=20260820-1754';
  document.head.appendChild(style);

  const layoutFix=document.createElement('link');
  layoutFix.rel='stylesheet';
  layoutFix.href='layout-fix.css?v=20260820-1759';
  document.head.appendChild(layoutFix);

  const chapter=document.createElement('button');
  chapter.className='desktop-chapter';
  chapter.type='button';
  chapter.setAttribute('aria-label','Open chapter navigation');
  chapter.setAttribute('aria-expanded','false');
  chapter.innerHTML=`<span class="desktop-chapter-index">01</span><span class="desktop-chapter-copy"><small>Current chapter</small><span class="desktop-chapter-title">Executive view</span></span><i class="desktop-chapter-chevron">⌄</i>`;
  document.body.appendChild(chapter);

  const rail=document.createElement('nav');
  rail.className='desktop-rail';
  rail.setAttribute('aria-label','Section progress');
  rail.innerHTML=items.map(item=>`<button class="desktop-rail-dot" type="button" data-target="${item.id}" data-label="${item.label}" aria-label="Go to ${item.title}"></button>`).join('');
  document.body.appendChild(rail);

  const overlay=document.createElement('div');
  overlay.className='desktop-chapters-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML=`
    <div class="desktop-overlay-head">
      <div><div class="desktop-overlay-kicker">Tasmeer Indigo · Strategy navigation</div><h2>Choose a chapter</h2><p>Move directly to any part of the strategy, or close this view and continue reading sequentially.</p></div>
      <button class="desktop-overlay-close" type="button" aria-label="Close chapter navigation">×</button>
    </div>
    <nav class="desktop-overlay-grid" aria-label="All strategy chapters">
      ${items.map(item=>`<a class="desktop-overlay-link" href="${item.href}" data-target="${item.id}"><span class="num">${item.num}</span><strong>${item.title}</strong><span>Open chapter ↗</span></a>`).join('')}
    </nav>`;
  document.body.appendChild(overlay);

  const closeButton=overlay.querySelector('.desktop-overlay-close');
  const railDots=[...rail.querySelectorAll('.desktop-rail-dot')];
  const overlayLinks=[...overlay.querySelectorAll('.desktop-overlay-link')];
  const chapterIndex=chapter.querySelector('.desktop-chapter-index');
  const chapterTitle=chapter.querySelector('.desktop-chapter-title');

  const setOpen=open=>{
    if(!mq.matches) open=false;
    document.body.classList.toggle('desktop-nav-open',open);
    chapter.setAttribute('aria-expanded',String(open));
    overlay.setAttribute('aria-hidden',String(!open));
    if(open) closeButton.focus();
  };

  chapter.addEventListener('click',()=>setOpen(!document.body.classList.contains('desktop-nav-open')));
  closeButton.addEventListener('click',()=>setOpen(false));
  overlay.addEventListener('click',e=>{if(e.target===overlay) setOpen(false);});

  const jumpTo=id=>{
    const target=document.getElementById(id);
    if(!target) return;
    setOpen(false);
    target.scrollIntoView({behavior:'smooth',block:'start'});
  };

  railDots.forEach(dot=>dot.addEventListener('click',()=>jumpTo(dot.dataset.target)));
  overlayLinks.forEach(link=>link.addEventListener('click',e=>{e.preventDefault();jumpTo(link.dataset.target);}));

  let activeId=items[0].id;
  const activate=id=>{
    const item=items.find(x=>x.id===id);
    if(!item||activeId===id&&chapterTitle.textContent===item.title) return;
    activeId=id;
    chapterIndex.textContent=item.num;
    chapterTitle.textContent=item.title;
    railDots.forEach(dot=>dot.classList.toggle('active',dot.dataset.target===id));
    overlayLinks.forEach(link=>link.classList.toggle('active',link.dataset.target===id));
  };

  const observer=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
    if(visible[0]) activate(visible[0].target.id);
  },{rootMargin:'-22% 0px -58% 0px',threshold:[0,.1,.25,.5]});
  sections.forEach(section=>observer.observe(section));
  activate(activeId);

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&document.body.classList.contains('desktop-nav-open')){e.preventDefault();setOpen(false);chapter.focus();}
  });

  mq.addEventListener?.('change',e=>{if(!e.matches) setOpen(false);});

  const normalizePunctuation=text=>text.replace(/\s*\u2014\s*/g,' - ');
  const textWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let textNode;
  while((textNode=textWalker.nextNode())){
    if(textNode.nodeValue.includes('\u2014')) textNode.nodeValue=normalizePunctuation(textNode.nodeValue);
  }
  document.title=normalizePunctuation(document.title);
  document.querySelectorAll('meta[content]').forEach(meta=>meta.setAttribute('content',normalizePunctuation(meta.getAttribute('content')||'')));
})();
