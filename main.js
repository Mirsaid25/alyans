let accordion = document.querySelectorAll(".accordion");

accordion.forEach((el) => {
    el.addEventListener("click", () => {
		let content = el.nextElementSibling;
		let icon = el.querySelector(".accordion_icon")
		let text = el.querySelector(".accordion_text")
		
		if(content.style.maxHeight){
			document.querySelectorAll(".content").forEach((el)=> el.style.maxHeight = null)
			icon.style.transform = "rotate(0deg)"
			text.style.color = "#333333"
		}else{
			document.querySelectorAll(".content").forEach((el)=> el.style.maxHeight = null)
			document.querySelectorAll(".accordion_icon").forEach((el)=> el.style.transform = "rotate(0deg)")
			document.querySelectorAll(".accordion_text").forEach((el)=> el.style.color = "#333333")
			text.style.color = "#8859CF"
			content.style.maxHeight = content.scrollHeight + "px"
			icon.style.transform = "rotate(180deg)"
		}
	});
});

// ***************** swiper *****************************

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
    speed: 400,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const swiper_block = document.querySelector(".swiper").swiper;
let prevButton = document.querySelector(".button-prev");
let nextButton = document.querySelector(".button-next");

//   prevButton.onclick(swiper_clock.slidePrev())
prevButton.addEventListener("click", function (e) {
    swiper_block.slidePrev();
});

nextButton.addEventListener("click", function (e) {
    swiper_block.slideNext();
});

// ********************** swiper2**********************************

const swiper_2 = new Swiper(".swiper_2", {
    speed: 400,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // 830: {
        //     slidesPerView: 2.5,
        //     spaceBetween: 20,
        // },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

const swiper_block2 = document.querySelector(".swiper_2").swiper;
let prevButton_2 = document.querySelector(".button-prev_2");
let nextButton_2 = document.querySelector(".button-next_2");

//   prevButton.onclick(swiper_clock.slidePrev())
prevButton_2.addEventListener("click", function (e) {
    swiper_block2.slidePrev();
});

nextButton_2.addEventListener("click", function (e) {
    swiper_block2.slideNext();
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