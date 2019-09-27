console.log("hello");
//create random array of numbers
var num =[];
var randomNum = null;

var newGame = function(event){
	var level = parseInt(event.target.getAttribute("level"))**2;
	var spacing = parseInt(event.target.getAttribute("spacing"));
	document.querySelector("table").style.borderSpacing = spacing + "px";
	
	document.querySelector(".total").innerHTML = level;
	num=[];
	for (let i = 1; i < level+1; i ++){
	num.push(i);
	}
console.log(num);
randomNum = num.slice(0);

};



var allButtons = document.querySelectorAll(".btnL");
for(let i = 0; i<5; i++){
	allButtons[i].addEventListener("click",newGame);
}

var clickedNum =[];


function shuffledNum (array) {
	for (let i = array.length - 1; i > 0; i --){
		var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};


//create table
var table = document.querySelector("table");

function generateTable(table, data) {
	var length = Math.sqrt(data.length);
	for (let i = 0; i < length; i++){
		let row = table.insertRow();
			row.className += "row";
			for (let j=0; j< length; j++){
				let cell = row.insertCell();
				cell.className += "cell";
				let wrapper = document.createElement('div');
				wrapper.className += "wrapper";
				let innerwrapper = document.createElement('div');
				innerwrapper.className += "innerwrapper";
				wrapper.appendChild(innerwrapper);
				cell.appendChild(wrapper);
			}
	}
//randomly distribute numbers into cells
	let cellText = document.querySelectorAll(".innerwrapper");
	for (let i =0; i < data.length; i++){
		cellText[i].innerHTML = data[i];
		cellText[i].value = data[i];
	}
};


let button = document.querySelector("#btn");

button.addEventListener("click", letPlay);

function letPlay (){
	shuffledNum(randomNum);
	generateTable(table,randomNum);
	// beep.play();
	music.play();//play click sound
	document.getElementById("intro").style.display = "none";
	document.getElementById("board").style.display = "block";
	let counter = 30;
	let startTimer = setInterval(start,1000);
	let stopIt = function(){
		music.stop();
		clearInterval(startTimer);
		document.querySelector("#result").style.visibility = "visible";
	}
	function start () {
		counter -=1;
		if(counter<1){
			stopIt();
		}
		document.querySelector("#time").innerHTML = counter;
	};

//push clicked numbers into an array
	let cells = document.querySelectorAll(".cell");
	for (let i = 0; i < cells.length; i++){
		cells[i].addEventListener("click",function(event){
			beep.play();
			let m = event.target.value;
			clickedNum.push(m);
			let n = event.target;
				n.style.display = "none";
			document.querySelector(".live-score").innerHTML =clickedNum.length ;
			document.querySelector(".total").innerHTML = num.length //in score board
			
			// console.log(clickedNum.length);
			document.querySelector("#score").innerHTML = clickedNum.length ;
			document.querySelector("#total1").innerHTML = num.length//in result div
			 
			for (let i =0; i < clickedNum.length; i++){
				if (clickedNum[i] != num[i]) {
					document.querySelector(".live-score").innerHTML =clickedNum.length-1 ;
					document.querySelector("#score").innerHTML = clickedNum.length -1;
					stopIt();
					
				} else if (clickedNum.length === num.length){
					stopIt();
				}
			}	
			
		});
	}
	
};


function playAgain (){
	window.location.reload();
	
}
HTMLAudioElement.prototype.stop = function()
{
this.pause();
this.currentTime = 0.0;
}

 





	