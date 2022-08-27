const bgOverlay = document.querySelector(".overlay")
const logo = "<h2>LOGO</h2>"
const overlayLogo = document.querySelector(".overlay-logo")
const body = document.querySelector("body")
// While this selects the h2 class this is also a string
// The 2nd paramenter does not like this and it should be in html
// Changed logo variable to html

function logoAnimation() {
    overlayLogo.classList.add("move")
}

function bgAnimation() {
    bgOverlay.classList.add("reveal")
    body.classList.remove("overflow")
    //navCenter.insertAdjacentHTML("afterbegin", logo)//
}

function bgTimer() {
    setTimeout(logoAnimation, 1000)
    setTimeout(bgAnimation, 2000)
}

bgTimer()