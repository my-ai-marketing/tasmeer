(()=>{
  const rules=[
    [/CEO-level/gi,'Executive-level'],
    [/CEO interpretation/gi,'Commercial interpretation'],
    [/CEO read/gi,'Commercial read'],
    [/The CEO should/gi,'Management should'],
    [/CEO use/gi,'Management use'],
    [/CEO broker dashboard/gi,'Broker performance dashboard'],
    [/CEO scorecard/gi,'Executive scorecard'],
    [/beneath the CEO scorecard/gi,'beneath the executive scorecard'],
    [/Back to CEO plan/gi,'Back to growth plan'],
    [/CEO growth plan/gi,'Commercial growth plan'],
    [/\bCEO\b/gi,'Executive']
  ];
  const rewrite=value=>rules.reduce((text,[pattern,replacement])=>text.replace(pattern,replacement),value||'');
  const cleanTextNode=node=>{
    if(!node?.nodeValue) return;
    const parent=node.parentElement;
    if(parent?.closest('script,style,noscript')) return;
    const next=rewrite(node.nodeValue);
    if(next!==node.nodeValue) node.nodeValue=next;
  };
  const cleanTree=root=>{
    if(!root) return;
    if(root.nodeType===Node.TEXT_NODE){cleanTextNode(root);return;}
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())) cleanTextNode(node);
    root.querySelectorAll?.('[aria-label],[title]').forEach(el=>{
      if(el.hasAttribute('aria-label')) el.setAttribute('aria-label',rewrite(el.getAttribute('aria-label')));
      if(el.hasAttribute('title')) el.setAttribute('title',rewrite(el.getAttribute('title')));
    });
  };
  const run=()=>{
    cleanTree(document.body);
    document.title=rewrite(document.title);
    document.querySelectorAll('meta[content]').forEach(meta=>meta.setAttribute('content',rewrite(meta.getAttribute('content'))));
  };
  run();
  const observer=new MutationObserver(mutations=>{
    mutations.forEach(m=>{
      if(m.type==='characterData') cleanTextNode(m.target);
      m.addedNodes.forEach(cleanTree);
    });
    document.title=rewrite(document.title);
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  window.addEventListener('load',run,{once:true});
})();