var moved1 = false;
var moved2 = false;
var moved3 = false;

var music = new Audio('music.mp3');
music.play();
music.loop=true;

setTimeout(function (){
	document.getElementById("game1").style.left="20%";
	document.getElementById("game1").style.opacity=1;
	document.getElementById("game2").style.left="50%";
	document.getElementById("game2").style.opacity=1;
	document.getElementById("game3").style.left="80%";
	document.getElementById("game3").style.opacity=1;
}, 0);

setTimeout(function (){
	document.getElementById("game1").style.transition = "0.3s";
	document.getElementById("game2").style.transition = "0.3s";
	document.getElementById("game3").style.transition = "0.3s";
}, 500);

function Move(thing){
	switch (thing){
		case 1:
			if(moved1 == false){
				document.getElementById("game2").style.left="51%";
				document.getElementById("game3").style.left="81%";
				moved1 = true;
			} else {
				document.getElementById("game2").style.left="50%";
				document.getElementById("game3").style.left="80%";
				moved1 = false;
			}
		break;
		case 2: 
			if(moved2 == false){
				document.getElementById("game1").style.left="19%";
				document.getElementById("game3").style.left="81%";
				moved2 = true;
			} else {
				document.getElementById("game1").style.left="20%";
				document.getElementById("game3").style.left="80%";
				moved2 = false;
			}
		break;
		
		case 3:
			if(moved3 == false){
				document.getElementById("game1").style.left="19%";
				document.getElementById("game2").style.left="49%";
				moved3 = true;
			} else {
				document.getElementById("game1").style.left="20%";
				document.getElementById("game2").style.left="50%";
				moved3 = false;
			}
		break;
	}
}