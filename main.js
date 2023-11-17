let accordion_child = document.querySelectorAll(".accordion_child");

for (let item of accordion_child) {
    item.addEventListener("click", function () {
        // let icon =
        if (item.classList.contains("accordion_style")) {
            item.querySelector("#accordion_icon").style.transform =
                "rotate(180deg)";
            item.querySelector(".title").style.color = "#8859CF";
            this.classList.replace("accordion_style", "accordion_active");
        } else {
            item.querySelector("#accordion_icon").style.transform =
                "rotate(0deg)";
            item.querySelector(".title").style.color = "#333333";
            this.classList.replace("accordion_active", "accordion_style");
        }
    });
}

// ***************** swiper *****************************

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper('.swiper', {
    speed: 400,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });

  const swiper_block = document.querySelector('.swiper').swiper;
  let prevButton = document.querySelector(".button-prev")
  let nextButton = document.querySelector(".button-next")

//   prevButton.onclick(swiper_clock.slidePrev())
    prevButton.addEventListener("click", function(e){
        swiper_block.slidePrev()
    })

    nextButton.addEventListener("click", function(e){
        swiper_block.slideNext()
    })

// ********************** swiper2**********************************


const swiper_2 = new Swiper('.swiper_2', {
    speed: 400,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
});

  const swiper_block2 = document.querySelector('.swiper_2').swiper;
  let prevButton_2 = document.querySelector(".button-prev_2")
  let nextButton_2 = document.querySelector(".button-next_2")

//   prevButton.onclick(swiper_clock.slidePrev())
    prevButton_2.addEventListener("click", function(e){
        swiper_block2.slidePrev()
    })

    nextButton_2.addEventListener("click", function(e){
        swiper_block2.slideNext()
    })