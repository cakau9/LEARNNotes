Functions are reusable pieces of code that can execute when "called" and always return an output.  They can have information passed through the scope of the function through an argument.  They are designed to be used many times in a program and should be as generic as possible, while still being descriptive about their purpose.

Vocab
- const - container for variable that cannot be reassgined.
- function declaration - creating the instructions for a function
- arrow functions (fat arrow) - is a binding element that is used in the new E6 syntax that makes a funciton a function.
- function call invocation - following instructions to perform all the steps declared in the function.
- return - requirement of a function tha tells computer what you want to happen after function goes through steps.  Can only have one return in a function.
- arguments - pieces of external/outside information that is used when a function runs.  They go inside the parantheses of the function.  Functions can take multiple arguments and the number of arguments must match the information being passed into the function call.
- pseudocode - plain English text explaining logic of function and allows us to think through problems.

Functions - are sets of instructions detailing how to do a task that can be used over and over.  Like blue print that can be used to build many buildings.

Function Declaration -> creating the function
    ex. (1)const (2)greeting = (3) (4) => { (5)
        return "Hello There" (6 & 7)
        }(5)
        console.log(greeting ()) (8)
    
        Anatomy ->
        1) Assigning a function to a variable
        2) Naming the function
        3) Parantheses which can take arguments
        4) Fat arrow syntax
        5) Open and closing curly brackets
        6) Set of instructions insde curly braces
        7) Return statement before closing curly brace
        8) Function call
Function Call -> calling function by its name will tell the program run through the steps declared in the function.

Function Arguments -> external/outside pieces of information functions often require to run.  Arguments go inside the parantheses of a function.
    ex. const greeting = (name) => {
        return `Hello ${name}`
    }
    console.log(greeting("Sally"))
    -> name is the argument in this example and name is an example of a placeholder.

    Placeholder -> allows us to pass any name we want to through the function when invoking the function.  A function is an ecapsulated machine that can be called many times and give a unique output.
        ex. console.log(greeting("Sam"))
        ex. console.log(greeting("Betty"))

Functions with Multiple Arguments -> 
    1) Functions can take multiple arguments.  The number of arguments in the function must match the information being passed into the function call.
        ex. const multiplier = (num1, num2) => {
            return num1*num2
        }
        console.log(mutiplier(3,5)) -> 15
        console.log(multiplier(5,6)) -> 30
    2) Values being passed into a function can be variables and should not be named the same as the arguments in the function.
        ex. var myNum1 = 9
            var myNum2 = 10
            var myNum3 = 1
            const multiplier = (num1, num2) => {
                return num1*num2
            }
            console.log(multiplier(myNum1, myNum2)) -> 90
            console.log(multiplier(myNum1, myNum3)) -> 9
    
Other ways To Declare a Function -> outdated but also works.  The word function can also be used to declare a function (w/o fat arrow syntax and equal sign)
    ex. function greeting(name) {
        return `Hello ${name}`
    }
    console.log(greeting("Sally")) -> "Hello Sally"

Pseudocode -> Allows you to think about your logic without being distracted by code and allows you to code without having to think about what comes next.  Denoted with // , known as commenting out.  Psuedocode helps break down process of creating a function by writing them in two steps:
    1) Write out all the logical steps of what you need to do -- plain, normal words
    2) Turn these steps into logical code

console.log vs return -> we can console.log as many times as we want and we can even console.log inside functions.  However, we can only have 1 return in a function.  Once a function hits its return, it will stop executing.


