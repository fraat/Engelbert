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

  randomNumber = Math.floor(Math.random()*4+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("news1").style.display = "inline";
		document.getElementById("news2").style.display = "none";
		document.getElementById("news3").style.display = "none";
		document.getElementById("news4").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("news1").style.display = "none";
		document.getElementById("news2").style.display = "inline";
		document.getElementById("news3").style.display = "none";
		document.getElementById("news4").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById("news1").style.display = "none";
		document.getElementById("news2").style.display = "none";
		document.getElementById("news3").style.display = "inline";
		document.getElementById("news4").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("news1").style.display = "none";
		document.getElementById("news2").style.display = "none";
		document.getElementById("news3").style.display = "none";
		document.getElementById("news4").style.display = "inline";
	}
}