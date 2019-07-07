
console.log("hello");

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
button.addEventListener("click", function(){
	beep.play();
	document.getElementById("intro").style.display = "none";
	document.getElementById("board").style.display = "block";
	let counter = 0;
	let startTimer = setInterval(start,1000);
	let stop = function(){
		clearInterval(startTimer);
		document.querySelector("#result").style.visibility = "visible";
	}
	function start () {
		counter +=1;
		if(counter> 59){
			stop();
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

			document.querySelector("#live-score").innerHTML =clickedNum.length;
			document.querySelector("#score").innerHTML =clickedNum.length;
			console.log(clickedNum);


			for (let i =0; i < clickedNum.length; i++){
				if (clickedNum[i] != num[i]) {
					stop();
					// // document.querySelector("#live-score").innerHTML =clickedNum.length;
					// console.log(clickedNum);
				}
			}	
			
		});
	}
	
}) ;

document.getElementById("back").addEventListener("click", location.reload());








	


