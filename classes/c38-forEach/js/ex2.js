window.addEventListener("load",function(){
    //window.onload와 같이 문서를 끝까지 읽고난 뒤 한번 실행되는 소스코드들
    let flag = false
    window.addEventListener("scroll",function(){
        flag = setAnimationToTag(flag)
    })

})

    

