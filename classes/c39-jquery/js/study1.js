$(document).ready(function(){
    // 문서가읽혀진 뒤 한번실행되는 함수
    $("ol>li:nth-of-type(1)+li").css("color","red")
})

// $(document).ready() 이거를
// $() 이렇게 축약할 수 있다.

// 이렇게 축약할 수 있다.
// $(function(){
//     $("ol>li:nth-of-type(1)+li").css("color","red")
// }) 