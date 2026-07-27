// =========================
// script.js
// =========================

// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});

// Curtains
setTimeout(() => {
    document.getElementById("curtain-left").style.display = "none";
    document.getElementById("curtain-right").style.display = "none";
}, 2600);

// Music
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (playing) {

        music.pause();
        musicBtn.innerHTML = "🎵";

    } else {

        music.play();
        musicBtn.innerHTML = "⏸";

    }

    playing = !playing;

};

// Countdown

const wedding = new Date("August 7, 2026 19:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = wedding - now;

    if (distance < 0) return;

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

}

updateCountdown();

setInterval(updateCountdown,1000);

// Slider

const slides=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

let current=0;

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"));

dots.forEach(d=>d.classList.remove("active"));

slides[i].classList.add("active");

dots[i].classList.add("active");

}

setInterval(()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

},4000);

// Hearts

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>heart.remove(),10000);

}

setInterval(createHeart,300);

// Flowers

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌹";

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(20+Math.random()*20)+"px";

flower.style.animationDuration=(7+Math.random()*5)+"s";

document.getElementById("flowers").appendChild(flower);

setTimeout(()=>flower.remove(),12000);

}

setInterval(createFlower,700);

// Sparkles

document.addEventListener("click",e=>{

for(let i=0;i<20;i++){

let s=document.createElement("div");

s.className="spark";

s.style.left=e.pageX+"px";

s.style.top=e.pageY+"px";

document.getElementById("sparkles").appendChild(s);

setTimeout(()=>s.remove(),1200);

}

});

// Fireworks

function fireworks(){

for(let i=0;i<120;i++){

let f=document.createElement("div");

f.className="fire";

f.style.left="50vw";

f.style.top="35vh";

f.style.setProperty("--x",(Math.random()*500-250)+"px");

f.style.setProperty("--y",(Math.random()*500-250)+"px");

document.getElementById("fireworks").appendChild(f);

setTimeout(()=>f.remove(),1800);

}

}

setTimeout(fireworks,2800);

setInterval(fireworks,15000);