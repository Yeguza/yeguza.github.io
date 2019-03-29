let sliderWrapper = document.getElementById("sliderWrapper");
let buttons = document.getElementsByClassName('button');
let currentSlidePstn = 0;

function changePosition(pstn) {
    currentSlidePstn = pstn;
    sliderWrapper.style.transform = "translate3d(" + pstn + "vw" + ", 0, 0)";
    changeButtonsColors(pstn);
    clearInterval(timerID);
    timerID = setInterval(autoSlide, 4000);
}

function changeButtonsColors(pstn) {
    for (let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove("clicked");
    }
    let buttonId = "[" + "onclick=" + "'changePosition(" + pstn + ")']";
    document.querySelector(buttonId).classList.add('clicked');
}

function autoSlide() {
    let pstn = currentSlidePstn - 100;
    if (pstn < -200) {
        pstn = 0;
    }
    sliderWrapper.style.transform = "translate3d(" + pstn + "vw" + ", 0, 0)";
    changeButtonsColors(pstn);
    currentSlidePstn = pstn;
}

let timerID = setInterval(autoSlide, 4000);
