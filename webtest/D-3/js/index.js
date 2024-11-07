window.addEventListener("load",function(){

    // 팝업
    let btn_open = this.document.querySelector("#btn_open")
    let btn_close = this.document.querySelector(".btn_close")
    let popup = this.document.querySelector(".popup")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    // 탭메뉴
    let tabs = this.document.querySelectorAll(".tabs > a")
    let tab_contents = this.document.querySelectorAll(".tab_contents>ul")

    tabs.forEach(function(tab,index){
        tab.addEventListener("click",function(){
            // 탭제목 활성화
            // tabs[0].classList.remove("on")
            // tabs[1].classList.remove("on")
            // tab.classList.add("on")

            // 탭내용 변경
            tab_contents[0].classList.remove("on")
            tab_contents[1].classList.remove("on")
            tab_contents[index].classList.add("on")
        })
    })

    // 슬라이드
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