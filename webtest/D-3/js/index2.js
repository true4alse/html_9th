$(document).ready(function(){

    // 팝업열기
    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })

    // 팝업닫기
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    // 탭메뉴
    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on") // 모든탭이 비활성화 스타일
        $(this).addClass("on") // 내가 클릭한 탭만 on클래스가 붙어서 활성화 스타일
        let idx = $(this).index() // 내가 클릭한 탭의 부모태그기준 순번을 저장 0또는1이 저장됨
        $(".tab_contents>ul").removeClass("on") // ul태그가 전부 안보이게 됨
        $(".tab_contents>ul").eq(idx).addClass("on") // 내가 클릭한 탭의 순번과 일치하는 ul태그가 on클래스가 붙어서 보이게 됨
    })

})