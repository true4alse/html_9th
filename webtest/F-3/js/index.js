window.addEventListener("load",function(){


    // slide
    let count = 0
    let train = this.document.querySelector(".train")
    this.setInterval(function(){
        count++
        if(count>2){count=0}
        train.style.transform = `translateX(${-33.333*count}%)`
    },2500)

    // tab
    let tabs = this.document.querySelectorAll(".tabmenu>dt")
    tabs.forEach(function(tab){
        tab.addEventListener("click",function(){
            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tab.classList.add("on")
        })
    })

    // popups
    let btn_open = this.document.querySelector("#btn_open")
    let btn_close = this.document.querySelector(".btn_close")
    let popup = this.document.querySelector(".popup")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

})