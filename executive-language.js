(()=>{
  const rewrite=text=>{
    if(!text||!/\bCEO\b/i.test(text)) return text;
    return text
      .replace(/\bCEO-level\b/gi,'executive-level')
      .replace(/\bCEO commercial growth proposal\b/gi,'Commercial growth proposal')
      .replace(/\bCEO scorecard\b/gi,'Executive scorecard')
      .replace(/\bCEO implication\b/gi,'Commercial implication')
      .replace(/\bCEO question\b/gi,'Management question')
      .replace(/\bCEO decision\b/gi,'Management decision')
      .replace(/\bthe CEO\b/gi,'leadership')
      .replace(/\bCEO\b/gi,'executive');
  };

  const cpqlInput=document.getElementById('cpqlInput');
  if(cpqlInput) cpqlInput.setAttribute('min','500');

  const scrubNode=root=>{
    if(!root) return;
    if(root.nodeType===Node.TEXT_NODE){
      const next=rewrite(root.nodeValue);
      if(next!==root.nodeValue) root.nodeValue=next;
      return;
    }
    if(root.nodeType!==Node.ELEMENT_NODE&&root.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&root.nodeType!==Node.DOCUMENT_NODE) return;

    if(root.nodeType===Node.ELEMENT_NODE){
      ['aria-label','title','alt','placeholder','data-label'].forEach(attr=>{
        if(root.hasAttribute?.(attr)){
          const current=root.getAttribute(attr)||'';
          const next=rewrite(current);
          if(next!==current) root.setAttribute(attr,next);
        }
      });
    }

    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
      const next=rewrite(node.nodeValue);
      if(next!==node.nodeValue) node.nodeValue=next;
    }

    if(root.querySelectorAll){
      root.querySelectorAll('[aria-label],[title],[alt],[placeholder],[data-label]').forEach(el=>{
        ['aria-label','title','alt','placeholder','data-label'].forEach(attr=>{
          if(!el.hasAttribute(attr)) return;
          const current=el.getAttribute(attr)||'';
          const next=rewrite(current);
          if(next!==current) el.setAttribute(attr,next);
        });
      });
    }
  };

  scrubNode(document.body);
  document.title=rewrite(document.title);
  document.querySelectorAll('meta[content]').forEach(meta=>{
    const current=meta.getAttribute('content')||'';
    const next=rewrite(current);
    if(next!==current) meta.setAttribute('content',next);
  });

  const observer=new MutationObserver(mutations=>{
    mutations.forEach(mutation=>{
      if(mutation.type==='characterData') scrubNode(mutation.target);
      mutation.addedNodes.forEach(scrubNode);
    });
  });
  observer.observe(document.body,{subtree:true,childList:true,characterData:true});
})();
