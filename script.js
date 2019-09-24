var cssSelector = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var backgroundColor = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	cssSelector.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
cssSelector.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

console.log(backgroundColor);

// html file: <input oninput="setGradient()" class="color1" type="color" name="color1" value="#00ff00">