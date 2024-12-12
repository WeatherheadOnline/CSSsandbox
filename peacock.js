const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const cyan = document.getElementById("cyan");
const blue = document.getElementById("blue");
const magenta = document.getElementById("magenta");

document.addEventListener("mousemove", function(e) {
    if (e.screenX > 0 && e.screenX < 100) 
        {red.style.visibility = "visible"} else {red.style.visibility = "hidden"};
    if (e.screenX > 50 && e.screenX < 150) 
        {orange.style.visibility = "visible"} else {orange.style.visibility = "hidden"};
    if (e.screenX > 100 && e.screenX < 200) 
        {yellow.style.visibility = "visible"} else {yellow.style.visibility = "hidden"};
    if (e.screenX > 150 && e.screenX < 250) 
        {green.style.visibility = "visible"} else {green.style.visibility = "hidden"};
    if (e.screenX > 200 && e.screenX < 300) 
        {cyan.style.visibility = "visible"} else {cyan.style.visibility = "hidden"};
    if (e.screenX > 250 && e.screenX < 350) 
        {blue.style.visibility = "visible"} else {blue.style.visibility = "hidden"};
    if (e.screenX > 300 && e.screenX < 400) 
        {magenta.style.visibility = "visible"} else {magenta.style.visibility = "hidden"};

});
