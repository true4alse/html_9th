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
let tabcontents = this.document.querySelectorAll(".tabcontents > ul")

tabs.forEach(function(tab,index){
    tab.addEventListener("click",function(){
        // 탭제목활성화
        tabs[0].classList.remove("on")
        tabs[1].classList.remove("on")
        tab.classList.add("on")
        // 탭내용변경
        tabcontents[0].classList.remove("on")
        tabcontents[1].classList.remove("on")
        tabcontents[index].classList.add("on")

    })
})

// 슬라이드
let count = 0
let train = this.document.querySelector(".train")

this.setInterval(function(){
    count++
    if(count>2){count=0} // 0,1,2,0,1,2,....
    train.style.transform = `translateY(${-33.333*count}%)`
},2500)


})
