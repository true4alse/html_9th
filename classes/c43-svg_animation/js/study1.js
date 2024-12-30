// window.addEventListener("load",function(){})
document.addEventListener("DOMContentLoaded",function(){

    let circle1 = document.querySelector(".circle1")
    let svg1 = document.querySelector("#svg1")
    svg1.setAttribute("width",window.innerWidth)
    svg1.setAttribute("height",window.innerWidth)
    svg1.setAttribute("viewBox",`0 0 ${window.innerWidth} ${window.innerWidth}`)

    document.addEventListener("mousemove",function(event){
        // 마우스를 움직일 때 마다 실행되는 소스코드
        let mouseX = event.pageX
        // pageX 는 전체 문서기준에서의 좌표이고 clientX 는 뷰포트 기준 좌표이다.
        let mouseY = event.pageY
        console.log(mouseX,mouseY)
        circle1.setAttribute("cx",mouseX)
        circle1.setAttribute("cy",mouseY)
    })

})