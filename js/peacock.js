const green = document.getElementById("green");
const cyan = document.getElementById("cyan");
const blue = document.getElementById("blue");
const magenta = document.getElementById("magenta");

const senstitivity = 20;   // in vw units

const setpointG = 40;   // in vw units
const setpointC = 50;   // in vw units
const setpointB = 60;   // in vw units
const setpointM = 70;   // in vw units

let screenXvw;  // this variable will hold e.screenX in vw units

document.addEventListener("mousemove", function(e) {
    screenXvw = e.screenX / window.innerWidth * 100;  // get e.screenX in vw units
    green.style.opacity = (senstitivity - Math.abs(screenXvw - setpointG))/senstitivity;
    cyan.style.opacity = (senstitivity - Math.abs(screenXvw - setpointC))/senstitivity;
    blue.style.opacity = (senstitivity- Math.abs(screenXvw - setpointB))/senstitivity;
    magenta.style.opacity = (senstitivity - Math.abs(screenXvw - setpointM))/senstitivity;
});
