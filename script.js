const msg =
"Every sunrise becomes more beautiful because I know you exist. ❤️";

let i = 0;

function type(){

if(i < msg.length){

document.getElementById("typing").innerHTML += msg.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

document.getElementById("btn").onclick = () =>{

document.getElementById("card").style.display = "block";

confetti();

}

function confetti(){

for(let i=0;i<80;i++){

let heart=document.createElement("div");

heart.innerHTML=Math.random()>0.5?"❤️":"🌸";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.transition="5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

},50);

setTimeout(()=>{

heart.remove();

},5000);

}

}
