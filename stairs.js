const container = document.getElementById("stairsContainer");
const lineWidth = 8;  // Remember to update --line-reverse in styles.css under #stairs
const screenWidth = screen.width + lineWidth;
const screenHeight = screen.height + lineWidth;

const unitWidth = 100;    // Remember to update --dimension in styles.css under #stairs
const unitHeight = unitWidth;
let measureWidth = 0;
let measureHeight = 0;
let countWidth = 0;
let countHeight = 0;

while (measureWidth <= screenWidth) {
    measureWidth += unitWidth;
    countWidth ++;
}

while (measureHeight <= (screenHeight)) {
    measureHeight += unitHeight;
    countHeight ++;
}

container.style.width = `${measureWidth}px`
container.style.height = `${measureHeight}px`

let i = 0;
while (i <= countWidth * countHeight) {
    let stair = document.createElement("div");
    stair.className = "stair";
    let stairInner = document.createElement("div");
    stairInner.className = "stairInner";
    stair.appendChild(stairInner);
    container.appendChild(stair);
    let box = document.createElement("div");
    box.className = "stairBox";
    stair.appendChild(box);
    i++;
}

const boxes = document.getElementsByClassName("stairBox");
let toggle = true; 
document.getElementById("stairsToggle").addEventListener("click", toggleAnimation); 

function toggleAnimation() {
    if (toggle == true) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.animation = "none";
        }
        // document.getElementsByClassName("stairBox").style.animation = "none";
        toggle = false;
    } else {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.animation = "stairStrobe 1s linear infinite";
        }
        // document.getElementsByClassName("stairBox").style.animation = "stairStrobe 1s linear infinite";
        toggle = true;
    }
}