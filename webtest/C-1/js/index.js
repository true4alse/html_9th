window.addEventListener("load",function(){

    // popup
    let btn_open = this.document.querySelector("#btn_open")
    let btn_close = this.document.querySelector(".btn_close")
    let popup = this.document.querySelector(".popup")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    // tab
    let tabs = this.document.querySelectorAll(".tabs>a")
    let tab_contents = this.document.querySelectorAll(".tab_contents>ul")

    tabs.forEach(function(tab,index){
        tab.addEventListener("click",function(){
            // 활성화스타일
            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tab.classList.add("on")
            // 내용변경
            tab_contents[0].classList.remove("on")
            tab_contents[1].classList.remove("on")
            tab_contents[index].classList.add("on")
        })
    })

    // slide
    let count = 0
    let slide = this.document.querySelectorAll(".train>li")

    this.setInterval(function(){
        count++
        if(count>2){count=0} // 0,1,2,0,1,2,...
        // slide[0].classList.remove("on")
        // slide[1].classList.remove("on")
        // slide[2].classList.remove("on")
        for(let i=0 ; i<slide.length ; i++){
            slide[i].classList.remove("on")
        }
        slide[count].classList.add("on")


    },2500)





})