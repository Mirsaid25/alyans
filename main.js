let accordion_child = document.querySelectorAll(".accordion_child")

for(let item of accordion_child){
    item.addEventListener("click", function(){
        // let icon = 
        if(item.classList.contains("accordion_style")){
            item.querySelector("#accordion_icon").style.transform = "rotate(180deg)"
            item.querySelector(".title").style.color = "#8859CF"
            this.classList.replace("accordion_style", "accordion_active")
        }else{
            item.querySelector("#accordion_icon").style.transform = "rotate(0deg)"
            item.querySelector(".title").style.color = "#333333"
            this.classList.replace("accordion_active","accordion_style")
        }
        
    })
}