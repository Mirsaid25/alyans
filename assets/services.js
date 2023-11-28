import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
    speed: 400,
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

const swiper_block = document.querySelector(".swiper").swiper;
let prevButton = document.querySelector(".button-prev");
let nextButton = document.querySelector(".button-next");

prevButton.addEventListener("click", function (e) {
    swiper_block.slidePrev();
});

nextButton.addEventListener("click", function (e) {
    swiper_block.slideNext();
});

// ********************************* swiperChild **********************************

// const swiperChildArray = [
//     {
//         id: 1,
//         img: "./assets/img/services/swiper_child_image.png",
//         title: "ЖК Просторная 7",
//         text: "Застройщик: Специализированный Застройщик “Легро”",
//         text2: "Отсудили: 598 474 р.",
//     },
//     {
//         id: 2,
//         img: "./assets/img/services/swiper_child_image.png",
//         title: "ЖК Просторная 7",
//         text: "Застройщик: Специализированный Застройщик “Легро”",
//         text2: "Отсудили: 598 474 р.",
//     },
// ];

// const swiperChields = document.querySelectorAll(".swiperChild");

// function addSwiperChields() {
//     const firstDiv = document.createElement("div");
//     const firstDivWrapper = document.createElement("div");

//     firstDiv.classList.add("swiperChild overflow-hidden border-2 border-[#F4ECFA] rounded-[5px]");
//     firstDivWrapper.classList.add("swiper-wrapper pt-[30px]");

//     for (let item of swiperChildArray) {
//         const swiperSlide = document.createElement("div");
//         const swiperSlideImg = document.createElement("img");
//         const swiperSlideDiv = document.createElement("div");
//         const swiperSlideDivFirstText = document.createElement("p");
//         const swiperSlideDivSecondText = document.createElement("p");
//         const swiperSlideDivDiv = document.createElement("div");
//         const swiperSlideDivDivP = document.createElement("p");

//         swiperSlide.classList.add("swiper-slide");
//         swiperSlideImg.classList.add("w-1/2 h-[180px] block m-auto");
//         swiperSlideDiv.classList.add("p-5");
//         swiperSlideDivFirstText.classList.add("text-[22px] font-medium");
//         swiperSlideDivSecondText.classList.add("mt-2");
//         swiperSlideDivDiv.classList.add("bg-[#F4ECFA] py-[8px] px-[16px] mt-[20px] rounded-[10px]");
//         swiperSlideDivDivP.classList.add("text-[#8859CF]");

//         swiperSlideImg.src = item.img
//         swiperSlideImg.alt = ""

//         swiperSlideDivFirstText.innerHTML = item.title
//         swiperSlideDivSecondText.innerHTML = item.text
//         swiperSlideDivDivP.innerHTML = item.text2

//     }

// }

// for (let i = 0; i < swiperChields.length; i++) {}

// for(let item of swiperChilds){

const swiper2 = new Swiper(".swiperChild_1", {
    speed: 400,
    navigation: {
    	nextEl: '.button-next_child_1',
    	prevEl: '.button-prev_child_1',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

const swiper3 = new Swiper(".swiperChild_2", {
    speed: 400,
    navigation: {
    	nextEl: '.button-next_child_2',
    	prevEl: '.button-prev_child_2',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});
const swiper4 = new Swiper(".swiperChild_3", {
    speed: 400,
    navigation: {
    	nextEl: '.button-next_child_3',
    	prevEl: '.button-prev_child_3',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});
const swiper5 = new Swiper(".swiperChild_4", {
    speed: 400,
    navigation: {
    	nextEl: '.button-next_child_4',
    	prevEl: '.button-prev_child_4',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

const swiper6 = new Swiper(".swiperChild_5", {
    speed: 400,
    navigation: {
    	nextEl: '.button-next_child_5',
    	prevEl: '.button-prev_child_5',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

// ********************* burger_menu ****************************

let burger_menu = document.querySelector(".burger_menu")
let menu_close = document.querySelector("#menu_close")
let menu_open = document.querySelector("#menu_open")

menu_open.addEventListener("click", ()=>{
    burger_menu.classList.replace("hidden", "block")
    document.body.style.overflowY = "hidden";
})

menu_close.addEventListener("click", ()=>{
    burger_menu.classList.replace("block", "hidden")
    document.body.style.overflowY = "scroll";
})

// ********************* modal **********************************

let modal = document.querySelector(".modal")
let modal_close = modal.querySelector("#modal_close")
let modal_open = document.querySelectorAll(".modal_open")

modal_open.forEach(item =>{
    item.addEventListener("click", ()=>{
        modal.classList.replace("hidden", "block")
        burger_menu.classList.replace("block", "hidden")
        document.body.style.overflowY = "hidden";
    })
})

modal_close.addEventListener("click", ()=>{
    modal.classList.replace("block", "hidden")
    document.body.style.overflowY = "scroll";
})

// *********************** Anchor links **********************************

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}