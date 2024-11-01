window.onload = function(){
    
    document.querySelector(".btnMoGnb").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mo").classList.add("on")
        return false
    })
    document.querySelector(".btnClose").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mo").classList.remove("on")
    })
    
    let moGnba = document.querySelectorAll(".moGnb a")
    for(let i=0 ; i<moGnba.length ; i++){
        moGnba[i].addEventListener("click",function(){
            document.querySelector("nav.mo").classList.remove("on")
        })
    }
    
}