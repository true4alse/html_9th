window.addEventListener("load",function(){

    // 팝업기능
    let btn_open = document.querySelector("#btn_open")
    let popup = document.querySelector(".popup")
    let btn_close = document.querySelector(".btn_close")

    btn_open.addEventListener("click",function(){
        // 버튼 눌렀을 때 팝업이 나타남
        popup.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    



})