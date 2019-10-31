var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
body = document.getElementById("gradient");

function init(){
    body.style.background = "linear-gradient(to right, #00ff00, #ff0000)";
    css.textContent = body.style.background + ";"
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}
init();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);