let playing=false;
let startReset=document.querySelector("#startReset");
let scoreValue=document.querySelector("#scoreValue");
let seconds=document.querySelector("#seconds");
let formula=document.querySelector("#formula");
let xText=document.querySelector("#x");
let yText=document.querySelector("#y");
let cal=document.querySelector("#cal");
let choices=document.querySelector("#choices");
let wrong=document.querySelector("#wrong");
let time=60;
let score=0;
let chosenFlag=false;
let correct=0;
let x,y=0;
let calD=["+","-","x","/"];
let choiceArr=[1,3,5,7];
let i=0;
let gameOver=document.querySelector("#gameOver");
var choiceValues=[];

startReset.addEventListener("click",function(){
	if(playing===false){
		playing=true;
		newGame();
		choosing();


		startReset.innerText="Reset Game";
		seconds.innerText="60";
		countDown();
	}else{
		
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
		game_Over();
		
	}
}

//Setting new Game within time frame:

function newGame(){

	wrong.style.display="none";

	chosenFlag=false;
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
		var correct_index=choiceArr[Math.floor(4*Math.random())];
		choices.childNodes[correct_index].innerHTML=correct;

		for(let elem of choices.childNodes){
			//Setting the right value:
			if(elem.innerHTML!==String(correct)){
				if(correct%1!==0){
					var choiceValue=Math.floor(100*Math.random()-10)/10;
					if(choiceValue===correct){
						choiceValue+=3;
					}
					elem.innerHTML=choiceValue;
				}else{
					var choiceValue=Math.floor(100*Math.random()-10);
					if(choiceValue===correct){
						choiceValue+=3;
					}
					elem.innerHTML=choiceValue;
				}
			}
			
		}
}

//game over

function game_Over(){
	chosenFlag=false;
	correct=null;
}

//choosing function

function choosing(){
	for(let elem of choices.childNodes){
		console.log("before choosing, the correct answer is "+correct);
			elem.addEventListener("mousedown",function(){
				if(elem.innerHTML===String(correct)&&chosenFlag===false){
					score++;
					chosenFlag=true;
					scoreValue.innerHTML=score;
					wrong.style.display="none";

					console.log("correct="+correct+" and chosen="+elem.innerHTML);
					newGame();
				} else if(elem.innerHTML!==String(correct)&&chosenFlag===false){
					console.log("correct answer is: "+correct+" and the chosen one is "+elem.innerHTML);
					wrong.style.display="flex";
					console.log("flex is somehow set!");
				} else{
					wrong.style.display="none";
				}

				
			})
	}
}
