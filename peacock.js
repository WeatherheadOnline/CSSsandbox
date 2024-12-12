const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const cyan = document.getElementById("cyan");
const blue = document.getElementById("blue");
const magenta = document.getElementById("magenta");

const senstitivity = window.innerWidth * 0.01;   // in vw units

const setpointR = window.innerWidth * 0.044;   // in vw units
const setpointO = window.innerWidth * 0.046;   // in vw units
const setpointY = window.innerWidth * 0.048;   // in vw units
const setpointG = window.innerWidth * 0.05;   // in vw units
const setpointC = window.innerWidth * 0.052;   // in vw units
const setpointB = window.innerWidth * 0.054;   // in vw units
const setpointM = window.innerWidth * 0.056;   // in vw units

const widthR = Math.abs(setpointR - senstitivity);
const widthO = Math.abs(setpointO - senstitivity);
const widthY = Math.abs(setpointY - senstitivity);
const widthG = Math.abs(setpointG - senstitivity);
const widthC = Math.abs(setpointC - senstitivity);
const widthB = Math.abs(setpointB - senstitivity);
const widthM = Math.abs(setpointM - senstitivity);

let screenXvw;  // this variable will hold e.screenX in vw units

document.addEventListener("mousemove", function(e) {
    screenXvw = e.screenX / window.innerWidth * 100;  // get e.screenX in vw units
    red.style.opacity = (widthR - Math.abs(screenXvw - setpointR))/widthR;
    orange.style.opacity = (widthO - Math.abs(screenXvw - setpointO))/widthO;
    yellow.style.opacity = (widthY - Math.abs(screenXvw - setpointY))/widthY;
    green.style.opacity = (widthG - Math.abs(screenXvw - setpointG))/widthG;
    cyan.style.opacity = (widthC - Math.abs(screenXvw - setpointC))/widthC;
    blue.style.opacity = (widthB- Math.abs(screenXvw - setpointB))/widthB;
    magenta.style.opacity = (widthM - Math.abs(screenXvw - setpointM))/widthM;
});



// document.addEventListener("mousemove", function(e) {
//     if (e.screenX > 0 && e.screenX < 100) {
//         red.style.visibility = "visible"
//     } else {
//         red.style.visibility = "hidden"
//     };
    
//     if (e.screenX > 50 && e.screenX < 150) 
//         {orange.style.visibility = "visible"} else {orange.style.visibility = "hidden"};
//     if (e.screenX > 100 && e.screenX < 200) 
//         {yellow.style.visibility = "visible"} else {yellow.style.visibility = "hidden"};
//     if (e.screenX > 150 && e.screenX < 250) 
//         {green.style.visibility = "visible"} else {green.style.visibility = "hidden"};
//     if (e.screenX > 200 && e.screenX < 300) 
//         {cyan.style.visibility = "visible"} else {cyan.style.visibility = "hidden"};
//     if (e.screenX > 250 && e.screenX < 350) 
//         {blue.style.visibility = "visible"} else {blue.style.visibility = "hidden"};
//     if (e.screenX > 300 && e.screenX < 400) 
//         {magenta.style.visibility = "visible"} else {magenta.style.visibility = "hidden"};
// });
