window.addEventListener("load",function(){

    // popup
    let btn_open = document.querySelector("#btn_open")
    let btn_close = this.document.querySelector(".btn_close")
    let popup = this.document.querySelector(".popup")
    let modal = this.document.querySelector(".modal")

    // open popup
    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
        modal.classList.add("on")
    })

    // close popup
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
        modal.classList.remove("on")
    })

    // slide
    let count = 0
    let slide = this.document.querySelectorAll(".train>li")

    this.setInterval(function(){
        count++
        if(count>2){count=0}
        slide[0].classList.remove("on")
        slide[1].classList.remove("on")
        slide[2].classList.remove("on")
        slide[count].classList.add("on")
    },2500)



})