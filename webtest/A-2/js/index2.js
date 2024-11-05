$(document).ready(function(){

    //팝업
    $("#btn_open").click(function(){
        $(".popup").addClass("on")
        $(".modal").addClass("on")
    })

    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
        $(".modal").removeClass("on")
    })

    //슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateX(${-33.333*count}%)`)
    },2500)

})