// ======================
// Loader
// ======================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display="none";

document.getElementById("curtain-left").style.transform="translateX(-100%)";

document.getElementById("curtain-right").style.transform="translateX(100%)";

},2500);

});

// ======================
// Music
// ======================

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

};

// ======================
// Slider
// ======================

const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

let current=0;

function showSlide(index){

slides.forEach(s=>s.classList.remove("active"));

dots.forEach(d=>d.classList.remove("active"));

slides[index].classList.add("active");

dots[index].classList.add("active");

}

setInterval(()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

},4000);

// ======================
// Countdown
// ======================

const wedding=new Date("August 7, 2026 19:30:00").getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=wedding-now;

if(distance<0)return;

document.getElementById("days").innerHTML=Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=Math.floor((distance%(1000*60))/1000);

}

updateCountdown();

setInterval(updateCountdown,1000);

// ======================
// Hearts
// ======================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.className="heart";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.zIndex="999";

heart.style.animation="floatHeart 8s linear";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

}

setInterval(createHeart,350);

// ======================
// Roses
// ======================

function createRose(){

const flower=document.createElement("div");

flower.innerHTML="🌹";

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-30px";

flower.style.fontSize=(20+Math.random()*20)+"px";

flower.style.zIndex="999";

flower.style.animation="fallRose 10s linear";

document.body.appendChild(flower);

setTimeout(()=>flower.remove(),10000);

}

setInterval(createRose,900);

// ======================
// Fireworks
// ======================

function fireworks(){

for(let i=0;i<80;i++){

const spark=document.createElement("div");

spark.style.position="fixed";

spark.style.width="6px";

spark.style.height="6px";

spark.style.borderRadius="50%";

spark.style.background=`hsl(${Math.random()*360},100%,60%)`;

spark.style.left="50vw";

spark.style.top="35vh";

spark.style.pointerEvents="none";

spark.style.zIndex="9999";

const x=(Math.random()*500)-250;

const y=(Math.random()*500)-250;

spark.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)`,

opacity:0

}

],{

duration:1800

});

document.body.appendChild(spark);

setTimeout(()=>spark.remove(),1800);

}

}

setTimeout(fireworks,3000);

setInterval(fireworks,15000);

// ======================
// Click Sparkles
// ======================

document.addEventListener("click",e=>{

for(let i=0;i<20;i++){

const s=document.createElement("span");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=e.clientX+"px";

s.style.top=e.clientY+"px";

s.style.pointerEvents="none";

s.style.animation="fade 1s";

document.body.appendChild(s);

setTimeout(()=>s.remove(),1000);

}

});
