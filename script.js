const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const canvas = document.getElementById('network-bg');
const ctx = canvas.getContext('2d');
let points = [];
function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.min(95, Math.floor(window.innerWidth / 18));
  points = Array.from({length:count},()=>({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    vx:(Math.random()-.5)*0.35,
    vy:(Math.random()-.5)*0.35
  }));
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const p of points){
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>canvas.width)p.vx*=-1;
    if(p.y<0||p.y>canvas.height)p.vy*=-1;
    ctx.beginPath();ctx.arc(p.x,p.y,1.6,0,Math.PI*2);ctx.fillStyle='rgba(56,189,248,.48)';ctx.fill();
  }
  for(let i=0;i<points.length;i++){
    for(let j=i+1;j<points.length;j++){
      const a=points[i],b=points[j];
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<135){
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
        ctx.strokeStyle=`rgba(99,102,241,${(1-d/135)*0.22})`;ctx.lineWidth=1;ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
resize();draw();window.addEventListener('resize', resize);
