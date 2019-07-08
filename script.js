
console.log("hello");
//create random array of numbers
var num =[];
for (let i = 1; i < 101; i ++){
	num.push(i);
	}
console.log(num[5]);
var clickedNum =[];

var randomNum = num.slice(0);
// console.log(randomNum);
function shuffledNum (array) {
	for (let i = array.length - 1; i > 0; i --){
		var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffledNum(randomNum);

//create table
var table = document.querySelector("table");
function generateTable(table, data) {
	for (let i = 0; i < 10; i++){
		let row = table.insertRow();
			row.className += "row";
			for (let j=0; j< 10; j++){
				let cell = row.insertCell();
				cell.className += "cell";
			}
	}

	let cellText = document.querySelectorAll(".cell");
	for (let i =0; i < data.length; i++){
		cellText[i].innerHTML = data[i];
		cellText[i].value = data[i];
	}
};
generateTable(table,randomNum);
//set timer

//click button for timer to start

let button = document.querySelector("#btn");

button.addEventListener("click", letPlay);
function letPlay (){
	beep.play();
	music.play();//play click sound
	document.getElementById("intro").style.display = "none";
	document.getElementById("board").style.display = "block";
	let counter = 0;
	let startTimer = setInterval(start,1000);
	let stopIt = function(){
		music.stop();
		clearInterval(startTimer);
		document.querySelector("#result").style.visibility = "visible";
	}
	function start () {
		counter +=1;
		if(counter> 30){
			stopIt();
		}
		document.querySelector("#time").innerHTML = counter;
	};

	let cells = document.querySelectorAll(".cell");
	for (let i = 0; i < cells.length; i++){
		cells[i].addEventListener("click",function(event){
			beep.play();
			let m = event.target.value;
			clickedNum.push(m);
			let n = event.target;
				n.style.display = "none";
			document.querySelector("#live-score").innerHTML =clickedNum.length ;
			
			console.log(clickedNum.length);
			document.querySelector("#score").innerHTML = clickedNum.length ;
			 


			for (let i =1; i < clickedNum.length; i++){
				if (clickedNum[i] != num[i]) {
					document.querySelector("#live-score").innerHTML =clickedNum.length-1 ;
					document.querySelector("#score").innerHTML = clickedNum.length -1;
					stopIt();
					
				}
			}	
			
		});
	}
	
};


function playAgain (){
	document.querySelector("#result").style.visibility = "hidden";
	table.innerHTML= "";
	clickedNum =[];
	document.querySelector("#live-score").innerHTML= "",
	document.querySelector("#score").innerHTML = "" ;
	generateTable(table,randomNum);
	letPlay();

}
HTMLAudioElement.prototype.stop = function()
{
this.pause();
this.currentTime = 0.0;
}





	


