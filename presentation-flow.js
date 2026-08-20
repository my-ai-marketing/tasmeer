(()=>{
  if(document.querySelector('script[data-presentation-flow-v2]')) return;
  const flow=document.createElement('script');
  flow.src='presentation-flow-v2.js?v=20260820-1912';
  flow.defer=true;
  flow.dataset.presentationFlowV2='true';
  document.head.appendChild(flow);
})();