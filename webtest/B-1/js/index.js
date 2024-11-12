window.addEventListener("load",function(){

// 팝업
let btn_open = this.document.querySelector("#btn_open")
let popup = this.document.querySelector(".popup")
let btn_close = this.document.querySelector(".btn_close")
btn_open.addEventListener("click",function(){
    popup.classList.add("on")
})
btn_close.addEventListener("click",function(){
    popup.classList.remove("on")
})

// 탭메뉴
let tab_titles = this.document.querySelectorAll(".tabs>a")
let tab_contents = this.document.querySelectorAll(".tab_contents>ul")

tab_titles.forEach(function(atag,index){
    atag.addEventListener("click",function(){
        // 탭제목활성화기능 
        tab_titles[0].classList.remove("on")
        tab_titles[1].classList.remove("on")
        atag.classList.add("on")
        // 탭내용변경기능
        tab_contents[0].classList.remove("on")
        tab_contents[1].classList.remove("on")
        tab_contents[index].classList.add("on")
    })
})

// 슬라이드
let train = document.querySelector(".train")
let count = 0
setInterval(function(){
    count++
    if(count>2){count=0} // 0,1,2,0,1,2,0,.....
    train.style.transform = `translateX(${-33.333*count}%)`
},2500)

})