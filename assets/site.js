
const b=document.querySelector('.menu-btn'), n=document.querySelector('.nav');
if(b&&n){b.addEventListener('click',()=>n.classList.toggle('open'));document.addEventListener('click',e=>{if(!n.contains(e.target)&&e.target!==b)n.classList.remove('open')})}
// Contact form posts directly to Basin (see contact.html form action); no JS submit handling needed.
