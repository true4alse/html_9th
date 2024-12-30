// 자동차라는 사물(객체)을 대량생산으로 만들기 위한 함수를 제작한다.
// function Car(option){
//     this.name = option.name
//     this.price = option.price
//     this.forward = function(){
//         alert(this.name+" 전진합니다.")
//     }
//     this.backward = function(){
//         alert(this.name+" 후진합니다.")
//     }
// }

class Car{
    constructor(option){
        this.name = option.name
        this.price = option.price
    }
    forward(){
        alert(this.name+" 전진합니다.")
    }
    backward(){
        alert(this.name+" 후진합니다.")
    }
}
Car.prototype.beep = function(){
    alert(this.name+"가 빵빵댑니다!")
}

let car1 = new Car({
    name:"소나타",
    price:30000000
})
let car2 = new Car({
    name:"아반떼",
    price:20000000
})
car1.forward()
car1.backward()
car1.beep()
car2.forward()
car2.beep()
console.log(car1,car2)




