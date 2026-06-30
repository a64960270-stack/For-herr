const message = document.getElementById("message");
const frame = document.querySelector(".photoFrame");
const crown = document.querySelector(".crown");

const messages = [

"Shhh...",

"Don't rush...",

"Someone deserves to see this...",

"Her name is...",

"Salamat ❤️",

"My favourite person.",

"My beautiful daughter.",

"I hope you're smiling right now...",

"Because this was made just for you.",

"Sometimes words are never enough...",

"But I still wanted you to know something...",

"You are truly beautiful.",

"Not only by appearance...",

"But by the light you carry.",

"Your smile is priceless.",

"Your kindness is rare.",

"Never doubt your worth.",

"Never forget how amazing you are.",

"Keep shining.",

"Keep smiling.",

"And always remain the wonderful Salamat I know. ❤️"

];

let index = 0;

function revealPhoto(){

frame.style.opacity="1";

frame.style.transform="scale(1)";

crown.style.opacity="1";

crown.style.transform="translateY(0)";

}

function typeWriter(text,i=0){

if(i===0){

message.innerHTML="";

message.style.opacity=1;

}

if(i<text.length){

message.innerHTML+=text.charAt(i);

setTimeout(()=>{

typeWriter(text,i+1);

},80);

}

else{

if(index===4){

revealPhoto();

}

if(index===messages.length-1){

setTimeout(finalScene,3000);

return;

}

setTimeout(fadeOut,1800);

}

}

function fadeOut(){

message.style.opacity=0;

setTimeout(()=>{

index++;

typeWriter(messages[index]);

},1000);

}

setTimeout(()=>{

typeWriter(messages[0]);

},2000);

/*============================
BUTTERFLIES
============================*/

const butterflyBox=document.getElementById("butterflies");

function createButterfly(){

const b=document.createElement("div");

b.className="butterfly";

b.innerHTML="🦋";

b.style.top=Math.random()*80+"vh";

b.style.animationDuration=(8+Math.random()*5)+"s";

butterflyBox.appendChild(b);

setTimeout(()=>b.remove(),14000);

}

setInterval(createButterfly,1200);

/*============================
HEARTS
============================*/

const hearts=document.getElementById("hearts");

function createHeart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-30px";

h.style.animationDuration=(5+Math.random()*4)+"s";

hearts.appendChild(h);

setTimeout(()=>h.remove(),9000);

}

setInterval(createHeart,1500);

/*============================
ROSE PETALS
============================*/

const petals=document.getElementById("rosePetals");

function createPetal(){

const p=document.createElement("div");

p.className="petal";

p.innerHTML="🌹";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(6+Math.random()*5)+"s";

petals.appendChild(p);

setTimeout(()=>p.remove(),11000);

}

setInterval(createPetal,1800);

/*============================
SPARKLES
============================*/

const sparkles=document.getElementById("sparkles");

function createSparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

sparkles.appendChild(s);

setTimeout(()=>s.remove(),3000);

}

setInterval(createSparkle,300);

/*============================
SHOOTING STARS
============================*/

const shooting=document.getElementById("shootingStars");

function shootingStar(){

const st=document.createElement("div");

st.className="star";

st.style.left=Math.random()*60+"vw";

st.style.top=Math.random()*35+"vh";

shooting.appendChild(st);

setTimeout(()=>st.remove(),1600);

}

setInterval(shootingStar,7000);

function finalScene(){

const ending=document.createElement("div");

ending.id="finalMessage";

ending.innerHTML=`

<div class="bigHeart">❤️</div>

<h1>Thank You, Salamat</h1>

<p>

May your days always be filled with happiness,

peace and endless reasons to smile.

</p>

`;

document.body.appendChild(ending);

}

/*==========================
MAGICAL GOLD DUST
==========================*/

const dustBox = document.getElementById("goldDust");

function createDust(){

const d = document.createElement("div");

d.className = "goldDust";

d.style.left = (window.innerWidth/2 - 120 + Math.random()*240) + "px";

d.style.top = (window.innerHeight/2 + 120 + Math.random()*120) + "px";

d.style.animationDuration = (4 + Math.random()*3) + "s";

dustBox.appendChild(d);

setTimeout(()=>{

d.remove();

},7000);

}

setInterval(createDust,120);

/*==============================
ENDING
==============================*/

function showEnding(){

document
.getElementById("endingOverlay")
.classList.add("show");

}

setTimeout(showEnding,85000);