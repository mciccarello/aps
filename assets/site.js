
const b=document.querySelector('.menu-btn'), n=document.querySelector('.nav');
if(b&&n){b.addEventListener('click',()=>n.classList.toggle('open'));document.addEventListener('click',e=>{if(!n.contains(e.target)&&e.target!==b)n.classList.remove('open')})}
const f=document.querySelector('#contact-form');if(f){f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const subject=encodeURIComponent('Website inquiry: '+(d.get('reason')||'General'));const body=encodeURIComponent([...d].map(([k,v])=>k+': '+v).join('\n'));location.href='mailto:terisman@advancedprosystems.com?subject='+subject+'&body='+body;})}
