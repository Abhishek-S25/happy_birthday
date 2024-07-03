let firstSlideContainer = document.getElementsByClassName("slide--content")[0];
let secondSlideContainer = document.getElementsByClassName("slide--content--one")[0];
let secondCanvas = document.getElementsByClassName("second--canvas")[0];
let thirdCanvas = document.getElementsByClassName("third--canvas")[0];
let fourthCanvas = document.getElementsByClassName("fourth--canvas")[0];

secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");
thirdCanvas.setAttribute("style", "display:none");
fourthCanvas.setAttribute("style", "display:none");

let containerToggleOne = setTimeout(function() {
    firstSlideContainer.setAttribute("style", "display:none");
    secondSlideContainer.setAttribute("style", "display:block");
}, 4500);

let removeFirstSlide = setTimeout(function() {
    document.getElementsByClassName("first--slide")[0].setAttribute("style", "display:none;");
    secondCanvas.setAttribute("style", "display:block");
}, 6500);

let removeSecondCanvas = setTimeout(function() {
    secondCanvas.setAttribute("style", "display:none");
    thirdCanvas.setAttribute("style", "display:block");
}, 9800);

let removeThirdCanvas = setTimeout(function() {
    thirdCanvas.setAttribute("style", "display:none");
    fourthCanvas.setAttribute("style", "display:block");
}, 16800); // Adjusted to allow 7 seconds for third canvas (9800ms + 7000ms)
