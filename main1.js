 

let name ='camry'
let color = 'white'
let currentSpeed = 0
function move (speed) {
carCurrentSpeed = speed
return `The ${name} is moving at speed of $ {carCurrentSpeed}km per hour`}
function stop() {
carCurrentSpeed = 0
return`The ${name} stopped`
}
 
console. log (move (100))
//////////////////////////

const carl = {
    name: 'camry',
     color1: 'white',
      currentSpeed: 0,
    move: function (speed) {
    this.currentSpeed = speed
    return 'The ${this. name} is moving at speed of ${this.currentSpeed}km per hour'
    },
    stop: function() {
    this.currentSpeed = 0
    return
    return`The ${this. name} stopped`
    }}

    ////////////
    class Car {

             static numberOfCars

        constructor (name, color, currentSpeed) {
        this.name = name
        this.color = color
        this.currentSpeed = currentSpeed}
    
    
    
        static incrementNumber0fCars () {
            Car.numberOfCars++
            }
            
    
    
    
    
    }


        const car11 = new Car(' camry','white', 0)

           const car22 = new Car('corella','black', 0)
console.log (car1. move (50))
console.log (car2. move (70))

console.log (Car.numberOfCars)







//////////////////

let user1= {
firstName:"Fatimah",
LastName: "Khalid",
}
let printFullName = function(){
console. Log ("Hello,"+this. firstName+" "+this. lastName);
}
printFullName.call(user1);

printFullName.apply;(user1);

  newFunction = printFulName.bind (user1, "25")
  newFunction();
  

  let name2 = function (n){
    console. log(n);
    }("Reem" ) 


    let area = rectangleArea (4, 2);
console. log (area) 