window.onload=function(){
    
    let now = new Date() // 현재시간과 날짜정보가 저장 됨
    let month = document.querySelector("#month")
    let date = document.querySelector("#date")
    let day = document.querySelector("#day")
    let hour = document.querySelector("#hour")
    let minute = document.querySelector("#minute")
    let second = document.querySelector("#second")

    let clock = document.querySelector(".clock")
    if(getDayOrNight()=="낮"){
        // day클래스와 night클래스를 삭제
        // day클래스 추가
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("day")
    }else{
        // day클래스와 night클래스를 삭제-- 깨끗하게만들고
        // night클래스 추가
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("night")
    }
    
    let monthArrayEn=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    let dayArrayEn=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
   
    // 각각의 태그에 현재시간날짜정보를 입력
    month.innerHTML = monthArrayEn[now.getMonth()]
    date.innerHTML = getDayWithSuffix(now.getDate())
    day.innerHTML = dayArrayEn[now.getDay()]
    hour.innerHTML = now.getHours()<10?"0"+now.getHours():now.getHours()
    minute.innerHTML = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
    second.innerHTML = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()

    // 1초마다 현재시간날짜정보를 span에 갱신
    let clockTimer = setInterval(function(){
        let now = new Date() // 현재시간과 날짜정보가 저장 됨
        month.innerHTML = monthArrayEn[now.getMonth()]
        date.innerHTML = getDayWithSuffix(now.getDate())
        day.innerHTML = dayArrayEn[now.getDay()]
        hour.innerHTML = now.getHours()<10?"0"+now.getHours():now.getHours()
        minute.innerHTML = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
        second.innerHTML = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()

        let clock = document.querySelector(".clock")
        if(getDayOrNight()=="낮"){
            // day클래스와 night클래스를 삭제
            // day클래스 추가
            clock.classList.remove("day")
            clock.classList.remove("night")
            clock.classList.add("day")
        }else{
            // day클래스와 night클래스를 삭제-- 깨끗하게만들고
            // night클래스 추가
            clock.classList.remove("day")
            clock.classList.remove("night")
            clock.classList.add("night")
        }

    },1000)

} 