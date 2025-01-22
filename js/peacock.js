const green = document.getElementById("green");
const cyan = document.getElementById("cyan");
const blue = document.getElementById("blue");
const magenta = document.getElementById("magenta");

const sensitivity = 20;   // in vw units

const setpointG = 40;   // in vw units
const setpointC = 50;   // in vw units
const setpointB = 60;   // in vw units
const setpointM = 70;   // in vw units

if ("ontouchstart" in window) {
    mobileHandler();
} else {
    desktopListener();
};

function desktopListener() {
    document.addEventListener("mousemove", function(e) {
        let screenXvw = e.screenX / window.innerWidth * 100;  // get e.screenX in vw units
        green.style.opacity = (sensitivity - Math.abs(screenXvw - setpointG))/sensitivity;
        cyan.style.opacity = (sensitivity - Math.abs(screenXvw - setpointC))/sensitivity;
        blue.style.opacity = (sensitivity- Math.abs(screenXvw - setpointB))/sensitivity;
        magenta.style.opacity = (sensitivity - Math.abs(screenXvw - setpointM))/sensitivity;
    });
}

function mobileHandler() {
    portraitListener();
    let portrait = window.matchMedia("(orientation: portrait)");
    portrait.addEventListener("change", function(e) {
        if(e.matches) {
            portraitListener();
        } else {
            landscapeListener();
        }
    })
}

function portraitListener() {
    window.addEventListener("deviceorientation", function(e){
        let opacityG = (sensitivity - Math.abs(e.gamma - setpointG + 2*sensitivity)) / sensitivity;
        if (opacityG < 0) {opacityG = 0}; 
        green.style.opacity = opacityG;

        let opacityC = (sensitivity - Math.abs(e.gamma - setpointC + 2*sensitivity)) / sensitivity;
        if (opacityC < 0) {opacityC = 0}; 
        cyan.style.opacity = opacityC;

        let opacityB = (sensitivity - Math.abs(e.gamma - setpointB + 2*sensitivity)) / sensitivity;
        if (opacityB < 0) {opacityB = 0}; 
        blue.style.opacity = opacityB;

        let opacityM = (sensitivity - Math.abs(e.gamma - setpointM + 2*sensitivity)) / sensitivity;
        if (opacityM < 0) {opacityM = 0}; 
        magenta.style.opacity = opacityM;
    });
}

function landscapeListener() {
    window.addEventListener("deviceorientation", function(e){
        let opacityG = (sensitivity - Math.abs(e.beta - setpointG + 2*sensitivity)) / sensitivity;
        if (opacityG < 0) {opacityG = 0}; 
        green.style.opacity = opacityG;

        let opacityC = (sensitivity - Math.abs(e.beta - setpointC + 2*sensitivity)) / sensitivity;
        if (opacityC < 0) {opacityC = 0}; 
        cyan.style.opacity = opacityC;

        let opacityB = (sensitivity - Math.abs(e.beta - setpointB + 2*sensitivity)) / sensitivity;
        if (opacityB < 0) {opacityB = 0}; 
        blue.style.opacity = opacityB;

        let opacityM = (sensitivity - Math.abs(e.beta - setpointM + 2*sensitivity)) / sensitivity;
        if (opacityM < 0) {opacityM = 0}; 
        magenta.style.opacity = opacityM;
    });
}


