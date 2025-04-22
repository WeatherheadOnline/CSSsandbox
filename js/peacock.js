const green = document.getElementById("green");
const greenCyan = document.getElementById("green-cyan");
const cyan = document.getElementById("cyan");
const cyanBlue = document.getElementById("cyan-blue");
const blue = document.getElementById("blue");
const blueMagenta = document.getElementById("blue-magenta");
const magenta = document.getElementById("magenta");

const sensitivity = 20;   // in vw units

const setpointG = 40;   // in vw units
const setpointGC = 45;
const setpointC = 50;   // in vw units
const setpointCB = 55;
const setpointB = 60;   // in vw units
const setpointBM = 65;
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
        greenCyan.style.opacity = (sensitivity - Math.abs(screenXvw - setpointGC))/sensitivity;
        cyan.style.opacity = (sensitivity - Math.abs(screenXvw - setpointC))/sensitivity;
        cyanBlue.style.opacity = (sensitivity - Math.abs(screenXvw - setpointCB))/sensitivity;
        blue.style.opacity = (sensitivity- Math.abs(screenXvw - setpointB))/sensitivity;
        blueMagenta.style.opacity = (sensitivity - Math.abs(screenXvw - setpointBM))/sensitivity;
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
        const opacityG = (sensitivity - Math.abs(e.gamma - setpointG + 2*sensitivity)) / sensitivity;
        if (opacityG < 0) {opacityG = 0}; 
        green.style.opacity = opacityG;

        const opacityGC = (sensitivity - Math.abs(e.gamma - setpointGC + 2*sensitivity)) / sensitivity;
        if (opacityGC < 0) {opacityGC = 0}; 
        greenCyan.style.opacity = opacityGC;

        const opacityC = (sensitivity - Math.abs(e.gamma - setpointC + 2*sensitivity)) / sensitivity;
        if (opacityC < 0) {opacityC = 0}; 
        cyan.style.opacity = opacityC;

        const opacityCB = (sensitivity - Math.abs(e.gamma - setpointCB + 2*sensitivity)) / sensitivity;
        if (opacityCB < 0) {opacityCB = 0}; 
        cyanBlue.style.opacity = opacityCB;

        const opacityB = (sensitivity - Math.abs(e.gamma - setpointB + 2*sensitivity)) / sensitivity;
        if (opacityB < 0) {opacityB = 0}; 
        blue.style.opacity = opacityB;

        const opacityBM = (sensitivity - Math.abs(e.gamma - setpointBM + 2*sensitivity)) / sensitivity;
        if (opacityBM < 0) {opacityBM = 0}; 
        blueMagenta.style.opacity = opacityBM;

        const opacityM = (sensitivity - Math.abs(e.gamma - setpointM + 2*sensitivity)) / sensitivity;
        if (opacityM < 0) {opacityM = 0}; 
        magenta.style.opacity = opacityM;
    });
}

function landscapeListener() {
    window.addEventListener("deviceorientation", function(e){
        const opacityG = (sensitivity - Math.abs(e.beta - setpointG + 2*sensitivity)) / sensitivity;
        if (opacityG < 0) {opacityG = 0}; 
        green.style.opacity = opacityG;

        const opacityGC = (sensitivity - Math.abs(e.beta - setpointGC + 2*sensitivity)) / sensitivity;
        if (opacityGC < 0) {opacityGC = 0}; 
        greenCyan.style.opacity = opacityGC;

        const opacityC = (sensitivity - Math.abs(e.beta - setpointC + 2*sensitivity)) / sensitivity;
        if (opacityC < 0) {opacityC = 0}; 
        cyan.style.opacity = opacityC;

        const opacityCB = (sensitivity - Math.abs(e.beta - setpointCB + 2*sensitivity)) / sensitivity;
        if (opacityCB < 0) {opacityCB = 0}; 
        cyanBlue.style.opacity = opacityCB;

        const opacityB = (sensitivity - Math.abs(e.beta - setpointB + 2*sensitivity)) / sensitivity;
        if (opacityB < 0) {opacityB = 0}; 
        blue.style.opacity = opacityB;

        const opacityBM = (sensitivity - Math.abs(e.beta - setpointBM + 2*sensitivity)) / sensitivity;
        if (opacityBM < 0) {opacityBM = 0}; 
        blueMagenta.style.opacity = opacityBM;

        const opacityM = (sensitivity - Math.abs(e.beta - setpointM + 2*sensitivity)) / sensitivity;
        if (opacityM < 0) {opacityM = 0}; 
        magenta.style.opacity = opacityM;
    });
}


