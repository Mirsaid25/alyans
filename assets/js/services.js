import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper_4", {
    speed: 400,
    loop:true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        624: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

const swiper_block = document.querySelector(".swiper_4").swiper;
let prevButton = document.querySelector(".button-prev");
let nextButton = document.querySelector(".button-next");

prevButton.addEventListener("click", function (e) {
    swiper_block.slidePrev();
});

nextButton.addEventListener("click", function (e) {
    swiper_block.slideNext();
});

// *********************************************************

const swiperChild = document.querySelectorAll(".revInnerSlider")

for(let i = 1; i <= swiperChild.length; i++){
    const swiper2 = new Swiper(`.swiperChild_${i}`, {
        speed: 400,
        loop:true,
        navigation: {
            nextEl: `.button-next_child_${i}`,
            prevEl: `.button-prev_child_${i}`,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
    
    const length = document.querySelector(`.swiperChild_${i}`).querySelectorAll(".swiper-slide").length
    const button_prev = document.querySelector(`.swiperChild_${i}`).querySelector(`.button-prev_child_${i}`)
    const button_next = document.querySelector(`.swiperChild_${i}`).querySelector(`.button-next_child_${i}`)

    if(length <= 1){
        button_next.classList.add("hidden")
        button_prev.classList.add("hidden")
    }else{
        button_next.classList.remove("hidden")
        button_prev.classList.remove("hidden")
    }
}