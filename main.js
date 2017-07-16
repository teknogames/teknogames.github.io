var moved1 = false;
var moved2 = false;
var moved3 = false;

var music = new Audio('music.mp3');
music.play();
music.loop=true;

var buttons = document.getElementsByClassName("button");
var descriptions = ["get nuts","jump on blocks","its just flappy bird but cool","its just ballz but cool","tower defense that doesnt work","draw pictures with friends and then vote for best","shoot your friends","its just sonic but cool"];

for(var i=0;i<buttons.length;i++){
	buttons[i].id=i;
	buttons[i].onmouseover = function(){
		for(var i=0;i<document.getElementsByClassName("description").length;i++){
			document.getElementsByClassName("description")[i].outerHTML = "";
		}
		var element = document.createElement("div");
		element.innerHTML=descriptions[this.id];
		element.className="description";
		element.style.left="calc("+this.offsetLeft+"px + 1.25vw)";
		element.style.top="calc("+this.offsetTop+"px + "+this.offsetHeight+"px + 0.5vw)";
		document.getElementById("buttons").appendChild(element);
		this.onmouseleave=function(){
			for(var i=0;i<document.getElementsByClassName("description").length;i++){
				document.getElementsByClassName("description")[i].outerHTML = "";
			}
		};
	}
}

window.onresize = function(){
	for(var i=0;i<document.getElementsByClassName("description").length;i++){
		document.getElementsByClassName("description")[i].outerHTML = "";
	}
}