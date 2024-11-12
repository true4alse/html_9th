$(document).ready(function(){

    // popup
    $("#btn_open").click(function(){
        $(".modal").addClass("on")
        $(".popup").addClass("on")
    })

    $(".btn_close").click(function(){
        $(".modal").removeClass("on")
        $(".popup").removeClass("on")
    })

    // slide    
    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)

})