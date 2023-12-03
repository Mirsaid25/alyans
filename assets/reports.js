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

// *************************************************************

  import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

    new Swiper(".swiper", {
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

//   ************************************************************

const swiper = new Swiper(".swiper_2", {
	speed: 400,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		600: {
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
		1280: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});

const swiper_block2 = document.querySelector(".swiper_2").swiper;
let prevButton2 = document.querySelector(".button-prev_2");
let nextButton2 = document.querySelector(".button-next_2");

//   prevButton.onclick(swiper_clock.slidePrev())
prevButton2.addEventListener("click", function (e) {
	swiper_block2.slidePrev();
});

nextButton2.addEventListener("click", function (e) {
	swiper_block2.slideNext();
});


// **************************************************************

const swiper3 = new Swiper(".swiper_3", {
	speed: 400,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		}
	},
});

const swiper_block3 = document.querySelector(".swiper_3").swiper;
let prevButton3 = document.querySelector(".button-prev_3");
let nextButton3 = document.querySelector(".button-next_3");

//   prevButton.onclick(swiper_clock.slidePrev())
prevButton3.addEventListener("click", function (e) {
	swiper_block3.slidePrev();
});

nextButton3.addEventListener("click", function (e) {
	swiper_block3.slideNext();
});

// **************************************************************

const swiper4 = new Swiper(".swiper_4", {
	speed: 400,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		}
	},
});

const swiper_block4 = document.querySelector(".swiper_4").swiper;
let prevButton4 = document.querySelector(".button-prev_4");
let nextButton4 = document.querySelector(".button-next_4");

//   prevButton.onclick(swiper_clock.slidePrev())
prevButton4.addEventListener("click", function (e) {
	swiper_block4.slidePrev();
});

nextButton4.addEventListener("click", function (e) {
	swiper_block4.slideNext();
});