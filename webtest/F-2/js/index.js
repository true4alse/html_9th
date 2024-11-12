window.addEventListener("load",function(){

    // popup
    let btn_open = this.document.querySelector("#btn_open")
    let btn_close = this.document.querySelector(".btn_close")
    let popup = this.document.querySelector(".popup")
    let modal = this.document.querySelector(".modal")

    btn_open.addEventListener("click",function(){
        modal.classList.add("on")
        popup.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        modal.classList.remove("on")
        popup.classList.remove("on")
    })

    // slide

    let count = 0
    let slides = this.document.querySelectorAll(".train>li")

    // this.setInterval(function(){
    //     count++
    //     if(count>2){count=0} //0,1,2,0,1,2,.....
    //     slides[0].classList.remove("on")
    //     slides[1].classList.remove("on")
    //     slides[2].classList.remove("on")
    //     slides[count].classList.add("on")
    // },2500)



})