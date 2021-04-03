function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

randomNumber = Math.floor(Math.random()*8+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("fact1").style.display = "inline";
		document.getElementById("fact2").style.display = "none";
		document.getElementById("fact3").style.display = "none";
		document.getElementById("fact4").style.display = "none";
		document.getElementById("fact5").style.display = "none";
		document.getElementById("fact6").style.display = "none";
		document.getElementById("fact7").style.display = "none";
		document.getElementById("fact8").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("fact1").style.display = "none";
		document.getElementById("fact2").style.display = "inline";
		document.getElementById("fact3").style.display = "none";
		document.getElementById("fact4").style.display = "none";
		document.getElementById("fact5").style.display = "none";
		document.getElementById("fact6").style.display = "none";
		document.getElementById("fact7").style.display = "none";
		document.getElementById("fact8").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById("fact1").style.display = "none";
		document.getElementById("fact2").style.display = "none";
		document.getElementById("fact3").style.display = "inline";
		document.getElementById("fact4").style.display = "none";
		document.getElementById("fact5").style.display = "none";
		document.getElementById("fact6").style.display = "none";
		document.getElementById("fact7").style.display = "none";
		document.getElementById("fact8").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("fact1").style.display = "none";
		document.getElementById("fact2").style.display = "none";
		document.getElementById("fact3").style.display = "none";
		document.getElementById("fact4").style.display = "inline";
		document.getElementById("fact5").style.display = "none";
		document.getElementById("fact6").style.display = "none";
		document.getElementById("fact7").style.display = "none";
		document.getElementById("fact8").style.display = "none";
	}
	if (randomNumber == 5) {
		document.getElementById("fact1").style.display = "none";
		document.getElementById("fact2").style.display = "none";
		document.getElementById("fact3").style.display = "none";
		document.getElementById("fact4").style.display = "none";
		document.getElementById("fact5").style.display = "inline";
		document.getElementById("fact6").style.display = "none";
		document.getElementById("fact7").style.display = "none";
		document.getElementById("fact8").style.display = "none";
		
	}
	if (randomNumber == 6) {
		document.getElementById("fact1").style.display = "none";
		document.getElementById("fact2").style.display = "none";
		document.getElementById("fact3").style.display = "none";
		document.getElementById("fact4").style.display = "none";
		document.getElementById("fact5").style.display = "none";
		document.getElementById("fact6").style.display = "inline";
		document.getElementById("fact7").style.display = "none";
		document.getElementById("fact8").style.display = "none";
		
	}
	if (randomNumber == 7) {
		document.getElementById("fact1").style.display = "none";
		document.getElementById("fact2").style.display = "none";
		document.getElementById("fact3").style.display = "none";
		document.getElementById("fact4").style.display = "none";
		document.getElementById("fact5").style.display = "none";
		document.getElementById("fact6").style.display = "none";
		document.getElementById("fact7").style.display = "inline";
		document.getElementById("fact8").style.display = "none";
	}
	if (randomNumber == 8) {
		document.getElementById("fact1").style.display = "none";
		document.getElementById("fact2").style.display = "none";
		document.getElementById("fact3").style.display = "none";
		document.getElementById("fact4").style.display = "none";
		document.getElementById("fact5").style.display = "none";
		document.getElementById("fact6").style.display = "none";
		document.getElementById("fact7").style.display = "none";
		document.getElementById("fact8").style.display = "inline";
		
	}
}
