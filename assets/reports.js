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