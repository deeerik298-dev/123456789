(() => {
 'use strict';
 const root=document.documentElement, demo=document.getElementById('demo');
 const button=document.getElementById('motion'), percent=document.getElementById('percent');
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let manualStatic=false, pending=false;
 function render(){
  pending=false;
  if(button.disabled!==preference.matches){mode();return;}
  const stationary=manualStatic||preference.matches;
  const distance=demo.offsetHeight-demo.querySelector('.scene').offsetHeight;
  const p=stationary||distance<=0?.5:Math.max(0,Math.min(1,-demo.getBoundingClientRect().top/distance));
  root.style.setProperty('--progress',p.toFixed(4));
  root.style.setProperty('--light-y',`${p*100}%`);
  percent.textContent=`${Math.round(p*100)}%`;
 }
 function schedule(){if(!pending){pending=true;requestAnimationFrame(render)}}
 function mode(){document.body.classList.toggle('static',manualStatic||preference.matches);button.disabled=preference.matches;button.textContent=preference.matches?'Statisch · systeemvoorkeur':manualStatic?'Licht bij scrollen':'Statisch licht';button.setAttribute('aria-pressed',String(manualStatic||preference.matches));render()}
 document.body.classList.add('js');button.hidden=false;
 button.addEventListener('click',()=>{manualStatic=!manualStatic;mode()});
 preference.addEventListener('change',mode);
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);mode();
})();
