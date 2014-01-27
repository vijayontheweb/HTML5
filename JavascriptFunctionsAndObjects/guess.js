window.onload = init;
function init() {
		//alert("Inside Init Method..");
		var button = document.getElementById("guessButton");
		button.onclick = handleButtonClick;				
}


function handleButtonClick() {
		//alert("Inside handleButtonClick Method..");
		var textMsg = document.getElementById("guessTextInput");
		var guessColor = textMsg.value;
		if (guessColor == "") {
			alert("Please enter a color");
		}else{
			//alert("Guess color entered is.."+guessColor);
		}	
		var answers = ["red","green","blue"];
		var random = Math.random();
		var index = Math.floor(random*answers.length);
		if (guessColor == answers[index]) {
			alert(random+ ": You're right! I was thinking of " + answers[index]);
		} else {
			alert(random+ ": Sorry, I was thinking of " + answers[index]);
		}		
}