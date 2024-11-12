$(document).ready(function(){

    //팝업 열기
    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })

    //닫기
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    // 슬라이드
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0} // 0,1,2,0,1,2,....
        $(".train").css("transform",`translateX(${-33.333*count}%)`)
    },2500)

})