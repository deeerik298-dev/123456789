(() => {
 'use strict';
 const light=document.querySelector('.light'),button=document.getElementById('motion');
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let manualStatic=false,pending=false;
 function render(){
  pending=false;
  const p=Math.max(0,Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)));
  const eased=p*p*(3-2*p);
  // Global exposure only: no moving band, mask edge, texture swap or image replacement.
  const opacity=manualStatic||preference.matches?.15:.10+.10*eased;
  light.style.opacity=opacity.toFixed(5);
  button.disabled=preference.matches;
  button.setAttribute('aria-pressed',String(manualStatic||preference.matches));
  button.textContent=preference.matches?'Statisch · systeemvoorkeur':manualStatic?'Licht bij scrollen':'Statisch licht';
 }
 function schedule(){if(!pending){pending=true;requestAnimationFrame(render)}}
 button.hidden=false;button.addEventListener('click',()=>{manualStatic=!manualStatic;render()});
 preference.addEventListener('change',render);
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);render();
})();
