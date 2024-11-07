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
    let train = this.document.querySelector(".train")

    this.setInterval(function(){
        count++
        if(count>2){count=0}
        train.style.transform = `translateX(${-33.333*count}%)`
    },2500)

    
    

})