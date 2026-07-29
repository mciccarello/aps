
const b=document.querySelector('.menu-btn'), n=document.querySelector('.nav');
if(b&&n){b.addEventListener('click',()=>n.classList.toggle('open'));document.addEventListener('click',e=>{if(!n.contains(e.target)&&e.target!==b)n.classList.remove('open')})}
// Contact form: submit to Basin via fetch, then redirect to our own thank-you page on success.
const f=document.querySelector('#contact-form');
if(f){f.addEventListener('submit',async e=>{
  e.preventDefault();
  const btn=f.querySelector('[type=submit]'), orig=btn?btn.textContent:'';
  if(btn){btn.disabled=true;btn.textContent='Sending…';}
  try{
    const res=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}});
    if(!res.ok)throw new Error('bad status');
    window.location.href='thank-you.html';
  }catch(err){
    if(btn){btn.disabled=false;btn.textContent=orig;}
    let m=f.querySelector('.form-error');
    if(!m){m=document.createElement('p');m.className='form-error';f.appendChild(m);}
    m.textContent='Sorry, something went wrong sending your message. Please try again, or email terisman@advancedprosystems.com.';
  }
})}
