const bkgd = document.getElementById("TextShimmer").children[0].children[2];

if ("ontouchstart" in window) {
    mobileListener();
} else {
    desktopListener();
};

function desktopListener() {
    document.addEventListener("mousemove", function(e) {
        bkgd.style.backgroundPosition = `${e.screenX*4 - window.innerWidth*4}px 0px`;
    });
};

function mobileListener() {
    window.addEventListener("deviceorientation", function(event){
            bkgd.style.backgroundPosition = `${16 * event.gamma}px, 0px`;
    });
}