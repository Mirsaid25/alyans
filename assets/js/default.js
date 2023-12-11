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

// ************************* header:hover **************************************

const submenu = document.querySelectorAll(".submenu")
const submenu_icon = document.querySelectorAll(".submenu_icon")
const submenu_block = document.querySelectorAll(".submenu_block")

submenu.forEach((item, index )=> {
  item.onmouseenter = () => {
    submenu_icon[index].classList.replace("rotate-180", "rotate-0")
    submenu_block[index].classList.replace("hidden", "block")
  }

  item.onmouseleave = () => {
    submenu_icon[index].classList.replace("rotate-0","rotate-180")
    submenu_block[index].classList.replace("block", "hidden")
  }
})

// submenu.onmouseenter = () => {
//   submenu_icon.classList.replace("rotate-180", "rotate-0")
//   submenu_block.classList.replace("hidden", "block")
// }

submenu.onmouseleave = () => {
  submenu_icon.classList.replace("rotate-0","rotate-180")
  submenu_block.classList.replace("block", "hidden")
}

// ***************************************************************

Fancybox.bind("[data-fancybox]");

// ************************ accordion ******************************

const accordion_button = document.querySelector(".accordion_button")
const accordion_icon = accordion_button.querySelector(".accordion_icon")
const accordion_block = document.querySelector(".accordion_block")

accordion_button.onclick = () =>{
  accordion_button.classList.toggle("mb-5")
	accordion_block.classList.toggle('max-h-0')
	accordion_icon.classList.toggle('rotate-180')
}