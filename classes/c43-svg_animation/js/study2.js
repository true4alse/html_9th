document.addEventListener("DOMContentLoaded",function(){
    let vec_circle = document.querySelector(".vec_circle")
    let path_length = vec_circle.getTotalLength()
    vec_circle.setAttribute("stroke-dasharray",path_length)
    vec_circle.setAttribute("stroke-dashoffset",path_length)
    setTimeout(function(){
        vec_circle.style.transition = "all 1s ease 0s"
    },100)
})