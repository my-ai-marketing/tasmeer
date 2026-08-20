(()=>{
  const language=document.createElement('script');
  language.src='presentation-language.js?v=20260820-1839';
  language.defer=true;
  document.head.appendChild(language);

  const script=document.createElement('script');
  script.src='ceo-app-v2.js?v=20260820-1824';
  script.defer=true;
  script.onload=()=>{
    const flow=document.createElement('script');
    flow.src='presentation-flow.js?v=20260820-1923';
    flow.defer=true;
    document.head.appendChild(flow);
  };
  document.head.appendChild(script);
})();