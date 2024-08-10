require('./index.css')

const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
const sliderImg = document.querySelectorAll('.sliderImg')
const circles = document.querySelectorAll(".circle")

setInterval(() => {
    controlSlide(slideIndex += 1)
}, 7000);

nextBtn.addEventListener("click", () => {
    controlSlide(slideIndex += 1)
})

prevBtn.addEventListener("click", () => {
    controlSlide(slideIndex -= 1)
})

let slideIndex = 1
controlSlide(slideIndex)

function controlSlide(n){
    let i;

    if (n > sliderImg.length) {
        slideIndex = 1
    }

    for(i = 0; i < sliderImg.length; i++){
        sliderImg[i].classList.remove("active")
    }
    
    for(i = 0; i < circles.length; i++){
        circles[i].classList.remove("active")
    }

    circles[slideIndex-1].classList.add("active")
    sliderImg[slideIndex-1].classList.add("active")
}


// Circles
circles[0].addEventListener("click", () => {
    controlSlide(slideIndex = 1)
})

circles[1].addEventListener("click", () => {
    controlSlide(slideIndex = 2)
})

circles[2].addEventListener("click", () => {
    controlSlide(slideIndex = 3)
})

circles[3].addEventListener("click", () => {
    controlSlide(slideIndex = 4)
})