const nav=document.querySelector('.nav nav'), menu=document.getElementById('hamburger');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

document.querySelectorAll('section[id]').forEach(section=>{
  const link=document.querySelector(`.nav nav a[href="#${section.id}"]`);
  const obs=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){
    document.querySelectorAll('.nav nav a').forEach(a=>a.classList.remove('active'));
    link?.classList.add('active');
  }}),{rootMargin:'-35% 0px -55% 0px'});
  obs.observe(section);
});
