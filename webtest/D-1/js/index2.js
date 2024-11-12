$(document).ready(function(){

    // popup
    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })

    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    // tabmenu
    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index() //0,1
        $(".tabcontents>ul").removeClass("on")
        $(".tabcontents>ul").eq(idx).addClass("on")
    })

    // slide
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateY(${-33.333*count}%)`)
    },2500)

})