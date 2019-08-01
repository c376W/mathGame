let playing=false;
let startReset=document.querySelector("#startReset");
let scoreValue=document.querySelector("#scoreValue");
let seconds=document.querySelector("#seconds");

startReset.addEventListener("click",function(){
	if(playing===false){
		playing=true;
		startReset.innerText="Reset Game";
		seconds.innerText="60";
	}else{
		playing=false;
		startReset.innerText="Start Game";
		location.reload();

	}
})
