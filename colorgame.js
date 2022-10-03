var sqNum = 6;
var colors = genColor(sqNum);

var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var comment = document.getElementById("comment");
var pickedDis = document.querySelector("span");
var sqrs = document.querySelectorAll(".square");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var pickedcolor = randColor();

pickedDis.textContent = pickedcolor;

easy.addEventListener('click', function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	comment.textContent = "";
	sqNum = 3;
	colors = genColor(sqNum);
	pickedcolor = randColor();
	pickedDis.textContent = pickedcolor;
	for(i=0; i < sqrs.length; i++){
		if(colors[i]){
			sqrs[i].style.backgroundColor = colors[i];
		}else{
			sqrs[i].style.display = "none";
		}
	}
})

hard.addEventListener('click', function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	comment.textContent = "";
	sqNum = 6;
	colors = genColor(sqNum);
	pickedcolor = randColor();
	pickedDis.textContent = pickedcolor;
	for(i=0; i < sqrs.length; i++){
			sqrs[i].style.backgroundColor = colors[i];
			sqrs[i].style.display = "block";
		}
})




reset.addEventListener('click', function(){
	colors = genColor(sqNum);
	pickedcolor = randColor();
	pickedDis.textContent = pickedcolor;
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	comment.textContent = "";
	for(i=0; i < sqrs.length; i++){
		sqrs[i].style.backgroundColor = colors[i];
	}

})



for(i=0; i < sqrs.length; i++){
	sqrs[i].style.backgroundColor = colors[i];
	sqrs[i].addEventListener('click', function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedcolor){
			changeAll();
			reset.textContent = "Play Again";
			h1.style.backgroundColor = pickedcolor;
			comment.textContent = "CORRECT!";
		}else{
			this.style.backgroundColor = "#232323";
			comment.textContent = "Try Again!";
		}
	})
}

function changeAll(){
	for(i=0; i < sqrs.length; i++){
		sqrs[i].style.backgroundColor = pickedcolor;
	}
}

function randColor(){
	var rand = Math.floor(Math.random() *colors.length);
	return colors[rand];
}

function genColor(num){
	var arr = [];
	// generate randoms colors
	for(i=0; i < num; i++){
		var colr = colorGen();
		arr.push(colr);
	}

	//add to array
	return arr;
}

function colorGen(){
	//for red
	var r = Math.floor(Math.random() * 256);
	//for green
	var g = Math.floor(Math.random() * 256);
	//for blue
	var b = Math.floor(Math.random() * 256);
	//create syntax
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





























