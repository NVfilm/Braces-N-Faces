
/* =========================
FINAL PREMIUM INTERACTIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {

/* =========================
SMOOTH REVEAL
========================= */

const elements = document.querySelectorAll(".card, .doctor, h1, p");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},{threshold:0.2});

elements.forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="0.8s ease";
observer.observe(el);
});

/* =========================
MAGNETIC BUTTON EFFECT
========================= */

document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("mousemove",(e)=>{

const rect = btn.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

btn.style.transform = `translate(${(x-rect.width/2)/8}px, ${(y-rect.height/2)/8}px)`;

});

btn.addEventListener("mouseleave",()=>{
btn.style.transform="translate(0,0)";
});
});

/* =========================
GSAP OPTIONAL
========================= */

if(typeof gsap !== "undefined"){

gsap.from(".hero-left h1",{
y:60,
opacity:0,
duration:1
});

gsap.from(".card",{
y:40,
opacity:0,
stagger:0.08
});

}

/* =========================
CURSOR GLOW (OPTIONAL)
========================= */

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX+"px";
cursor.style.top = e.clientY+"px";
});

});
