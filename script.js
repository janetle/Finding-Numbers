
console.log("hello");
//create random array of numbers
// function chooseLevel() {
var num =[];
var clickedNum =[];
var randomNum = num.slice(0);
var table = document.querySelector("table");
// var level;
function createLevel(level){
	num = [];
	for (let i = 1; i < level; i ++){
	num.push(i);
	};

	console.log(num);//inside the function, num is updated. but the global variable out of the function did not
}
// createLevel(26);

console.log(num);



function shuffledNum (array) {
	for (let i = array.length - 1; i > 0; i --){
		var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffledNum(randomNum);
console.log(randomNum);//work here
//create table
// var table = document.querySelector("table");
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

	let cellText = document.querySelectorAll(".innerwrapper");
	for (let i =0; i < data.length; i++){
		cellText[i].innerHTML = data[i];
		cellText[i].value = data[i];
	}
};
generateTable(table,randomNum);//table generated


function chooseLevel_1(){
	createLevel(17);
	document.querySelector("table").style.borderSpacing = " 25px";
}

function chooseLevel_2() {
	createLevel(26);createTable();
	document.querySelector("table").style.borderSpacing = " 15px";
}

function chooseLevel_3() {
	chooseLevel();createLevel(37);
	document.querySelector("table").style.borderSpacing = " 10px";
}


function chooseLevel_4() {
	createLevel(50);
	document.querySelector("table").style.borderSpacing = " 5px";
}

function chooseLevel_5() {
	createLevel(82);	
}
document.querySelector("#level1").addEventListener("click",chooseLevel_1);
document.querySelector("#level2").addEventListener("click",chooseLevel_2);
document.querySelector("#level3").addEventListener("click",chooseLevel_3);
document.querySelector("#level4").addEventListener("click",chooseLevel_4);
document.querySelector("#level5").addEventListener("click",chooseLevel_5);
//set timer

//click button for timer to start

let button = document.querySelector("#btn");

button.addEventListener("click", letPlay);
function letPlay (){
	beep.play();
	music.play();//play click sound
	document.getElementById("intro").style.display = "none";
	document.getElementById("board").style.display = "block";
	let counter = randomNum.length;
	let startTimer = setInterval(start,1000);
	let stopIt = function(){
		music.stop();
		clearInterval(startTimer);
		document.querySelector("#result").style.visibility = "visible";
	}
	function start () {
		counter --;
		if(counter< 0){
			stopIt();
		}
		document.querySelector("#time").innerHTML = counter;
	};
//events happen when  number is clicked

	let cells = document.querySelectorAll(".cell");
	for (let i = 0; i < cells.length; i++){
		// cells[i].style.backgroundColor = randomColor();
		cells[i].addEventListener("click",function(event){
			beep.play();
			let m = event.target.value;
			clickedNum.push(m);
			let n = event.target;
				n.style.display = "none";
			document.querySelector("#live-score").innerHTML =clickedNum.length ;
			document.querySelector("#total").innerHTML =randomNum.length;
			
			console.log(clickedNum.length);
			document.querySelector("#score").innerHTML = clickedNum.length ;
			document.querySelector("#totalV").innerHTML = randomNum.length;
			 

//check result
			for (let i =1; i < clickedNum.length; i++){
				if (clickedNum[i] != num[i]) {
					document.querySelector("#live-score").innerHTML =clickedNum.length-1 ;
					document.querySelector("#score").innerHTML = clickedNum.length -1;
					stopIt();
					
				} else if (clickedNum.length === randomNum.length){
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



// let randomColor = function () {
//  var letters = '0123456789ABCDEF';
//  var color = '#';
//  for (var i = 0; i < 6; i++) {
//    color += letters[Math.floor(Math.random() * 16)];
//  }
//  return color;
// }



	


