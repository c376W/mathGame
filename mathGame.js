let playing=false;
let startReset=document.querySelector("#startReset");
let scoreValue=document.querySelector("#scoreValue");
let seconds=document.querySelector("#seconds");
let formula=document.querySelector("#formula");
let xText=document.querySelector("#x");
let yText=document.querySelector("#y");
let cal=document.querySelector("#cal");
let choices=document.querySelector("#choices");
let time=4;
let score=0;
let correct=0;
let x,y=0;
let calD=["+","-","x","/"];
let choiceArr=[1,3,5,7];
let i=0;
let gameOver=document.querySelector("#gameOver");

startReset.addEventListener("click",function(){
	if(playing===false){
		playing=true;
		x=Math.floor(20*Math.random());
		y=Math.floor(20*Math.random()+1);
		xText.innerHTML=x;
		yText.innerHTML=y;
		i=Math.floor(4*Math.random());
		cal.innerHTML=calD[i];

		switch(calD[i]){
			case "+":
				correct=x+y;
				break;
			case "-":
				correct=x-y;
				break;
			case "x":
				correct=x*y;
				break;
			case "/":
				correct=Math.round(x/y*100)/100;
				break;
		}
		let correct_index=choiceArr[Math.floor(4*Math.random())];
		choices.childNodes[correct_index].innerHTML=correct;
		for(let elem of choices.childNodes){
			if(!elem.innerHTML){
				if(correct%1!==0){
					elem.innerHTML=Math.floor(100*Math.random()-10)/10;
				}else{
					elem.innerHTML=Math.floor(100*Math.random()-10);
				}
			}
		}
		console.log(correct);
		console.log(choices.childNodes[1]);



		startReset.innerText="Reset Game";
		seconds.innerText="60";
		countDown();
	}else{
		playing=false;
		formula.innerHTML="";
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
