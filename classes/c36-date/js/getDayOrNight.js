function getDayOrNight(){
    let now = new Date() // 현재시간과 날짜정보가 저장 됨
    let hours = now.getHours() // 0~23 시간을 리턴
    let minutes = now.getMinutes() // 0~59 분을 리턴
    // 낮시간은 9시 40분부터 18시 5분까지
    if((hours>9 && hours<18) || (hours==9 && minutes>=40) || (hours==18 && minutes<5)){
        return "낮"
    }else{
        return "밤"
    }
}