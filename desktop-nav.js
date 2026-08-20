(()=>{
  const language=document.createElement('script');
  language.src='presentation-language.js?v=20260820-1839';
  language.defer=true;
  language.onload=()=>{
    const script=document.createElement('script');
    script.src='ceo-app-v2.js?v=20260820-1824';
    script.defer=true;
    document.head.appendChild(script);
  };
  document.head.appendChild(language);
})();