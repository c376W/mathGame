let playing=false;
let startReset=document.querySelector("#startReset");
let scoreValue=document.querySelector("#scoreValue");
let seconds=document.querySelector("#seconds");
let time=60;
let score=0;
let gameOver=document.querySelector("#gameOver");

startReset.addEventListener("click",function(){
	if(playing===false){
		playing=true;
		startReset.innerText="Reset Game";
		seconds.innerText="60";
		countDown();
	}else{
		playing=false;
		startReset.innerText="Start Game";
		location.reload();

	}
})

//Functions

//Countdown
const countDown=()=>{
	let action=setInterval(()=>{
		time--;
		seconds.innerHTML=time;
		stopTime(time,action);
	},1000)

}

//Clear count down

const stopTime=(time,action)=>{
	if(time===0){
		clearInterval(action);
		gameOver.style.display="flex";
		gameOver.childNodes[3].childNodes[1].innerHTML=score;
		
	}
}
