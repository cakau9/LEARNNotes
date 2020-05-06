// // Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// var item = 10
// if (item <= 100) {
//     console.log("in budget")
// } else {
//     console.log("over budget")
// }

// // Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var hungry = "floob"
// if (hungry === "yes") {
//     console.log("eat food")
// } else if (hungry === "no") {
//     console.log("keep coding")
// } else {
//     console.log("you are not alive")
// }

// // Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var trafficLight = "blur"
// if (trafficLight ==="green") {
//     console.log("go")
// } else if (trafficLight === "yellow") {
//     console.log("slow down")
// } else if (trafficLight === "red") {
//     console.log("stop")
// } else {
//     console.log("You are not at a traffic light are you?")
// }
// // Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
// var num1 = 99
// var num2 = 10000
// if (num1 > num2) {
//     console.log(num1)
// } else if (num2 > num1) {
//     console.log(num2)
// } else if (num1 === num2)
//     console.log(`${num1} is equal to ${num2}.`)

// // Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero
// var num = 245
// if (num === 0) {
//     console.log("zero")
// } else if (num % 2 ===1) {
//     console.log("odd")
// } else if (num % 2=== 0){
//     console.log("even")
// }

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available.
// var gradePercentage = 85
// if (gradePercentage === 100) {
//     console.log("perfect score")
// } else if (gradePercentage >= 90) {
//     console.log ("A")
// } else if (gradePercentage >= 80) {
//     console.log("B")
// } else if (gradePercentage >=70) {
//     console.log("C")
// } else if (gradePercentage >= 60) {
//     console.log("D")
// } else if (gradePercentage === 0){
//     console.log ("no grade available")
// }

// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
// var dataType = 9
// console.log(typeof dataType)

// // Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
// var password = "aakeufja"
// if (password.length >= 12 && password.includes ("!")) {
//     console.log("That is a mighty strong password!")
// } else if (password.length>= 8 || password.includes("!")) {
//     console.log("That password is strong enough.")
// } else {
//     console.log("That is not a valid password.")
// }

// Challenges
// Exercise 1
// Consider this variable:
// var meaningOfLife = 42
// // Write the code that prints 'The answer to the meaning of life is 42'.
// console.log(`The answer to the meaning of life is ${42}.`)

// Exercise 2
// Consider this code:
var zooAnimals = ['giraffe', 'fennec fox', 'elephant']
// zooAnimals.forEach(animal =>  console.log('The zoo has a' + animal))
// Refactor the .forEach method to use string interpolation.
zooAnimals.forEach(array(value) => {
    return `The zoo has a ${value}.`
})
console.log(zooAnimals)

// Exercise 3
// // Consider this variable:
// var burger = {
//     cheese: 'cheddar',
//     patty: 'black bean',
//     onions: false,
// }
// // Write the code that prints 'black bean burger with cheddar' to the screen.
// const vegBurg = (object) => {
//     return `${object.patty} burger with ${object.cheese}`
// }
// console.log(vegBurg(burger))

// STRETCH

// Given these 2 burger objects:

// var beanBurger = {
//     cheese: 'cheddar',
//     patty: 'black bean',
//     onions: false,
// }
// var turkeyBurger = {
//     cheese: 'swiss',
//     patty: 'turkey',
//     onions: true,
// }
// // Write a function takes a burger object and returns a descriptive string.

// const burger = (object) => {
//     if (object.onions === true) {
//         return `A ${object.patty} burger with ${object.cheese} cheese and with onions.`    
//     } else if (object.onions === false) {
//         return `A ${object.patty} burger with ${object.cheese} cheese and no onions.`
//     }
// }
// console.log(burger(beanBurger))