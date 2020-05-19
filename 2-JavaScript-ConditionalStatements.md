Conditional Statements are decision structures, decision trees, or if/else statements and are fundamental to computer programming.
    - They are interable- meaning, it goes step by step until a condition is met, so goes from one thing to the next.

Vocab
- if - a must in coditionals.  If it is true, the program will continue to run.  If not true, nothing will happen.
- else if - can use as many as you want and will run after the intial if statement and before the else catch all statement.  Make sure to have the most specific condition prioritized since it will run from the if statement down and will stop running once the condition is met.
- else - the catch all which will autuomatically run if the if condition is not met.  This is helps to catch bugs in code.
- string interpolation - one of the most common and useful implementations of template literals.  It is essentially the embedding of expressions in a string.

Programming is the art of solving very complex problems or processes by breaking each problem into tiny, solvable pieces.  If/else decision structure is a tool that helps us do this.  In code we create logic saying -> if this is true, do this, otherwise, do this other thing.
    ex. if(this is true){
            console.log(do this)
    } else {
        console.log(do this other thing)
    }
    * Note, console.log will print things to your console to check to see if code is working.

If/Else -> create an evaluation and compare an input to a value.
    - All conditionals must have an if statement.  If the set condition is true, the program will continue to run.  If the condition is not true, nothing will happen.
        ex. var carOn = true
            if(carOn === true){
                console.log("The engine is running")
            }
            => "The engine is running"
    - If we want our code to return something if the statement is not true, wed add an else statement.  Else is the catch all, so it doesn't need a conditional statement, it will just run whatever you tell it to return and will automatically run if the the if condition is not met.  Else catces bugs.
        ex. var carOn = false
            if(carOn === true){
                console.log("The engine is running.")
            }else{
                console.log("The engine is off.")
            }
            => "The engine is off."
    - Else If statements gives us more options in our decision structure and like if statements, must have a conditional statement.  Else if will run after the initial if statement and before the else catch all.  You can use as many as you want.  Remember, once the condition is met, the program has finished running so the most specific condition should be prioritized.  
        ex. var carOn = true
            if (carOn === true){
                console.log("The engine is running.")
            }else if (carOn === false){
                console.log("The engine is off".)
            }else{
                console.log("The car is broken")
            }
            => "The engine is running."
    - If/Else statements can use (as seen with Booleans):
        - Equality Operators -> == do these two things do the same thing or equate to each other?
        === stricktly this value.
        - Relational Operators -> >, <. >=, <=, used predominantely with numbers
        - Logical Operators:
            && -> and and, || -> or or, !== not
            - If && -> need both pieces of equation to be true, or it will all be false ir both aren't true.
            - If || -> as long as one side is true, whole statement is true
            - !== -> bang operator is negation of what is pasing in 
                ex. console.log(!true)-> false

Template literals in JavaScript allow variables to embed in strings.  Used to only be able to use concatenation.  String interpolation is denoted with ` backticks and a dollar sign and curly braces and allows variables to be stored inside of strings. String interpoloation is the embedding of expressions in a string. Important pieces of string interpolation:
    - back tick characters `` signal the start and end of a template string.
    - a dollar sign $ indicates the start of an embedded expression
    - the curly braces {} indicate the beginning and the end of the JS expression.
        ex. with string interpolation:
            var num1 = 34
             var num2 = 78
             console.log(`${num1} is less than ${num2}.`) -> 34 is less than 78
        
        ex. without string interpolation
             var num1 = 34
             var num2 = 78
            console.log(num1+ "is less than" + num2) -> 34 is less than 78

        ex. more string interpolation
            var fruit = "apple"
            console.log(`The fruit is an ${fruit}.`) -> "The fruit is an apple."
            var fruit = "orange"
            console.log(`Now the fruit is an ${fruit}.`)-> "Now the fruit is an orange."
We gain easy to write expressions and ver readable code.  Also allows us to write multi-line strings.
    ex. let oldLongString = "This\nis\na\nlong\nstring"
        console.log(oldLongString)

        let longString = `
        This
        is
        a
        long
        string
        `
        console.log(longString)
    


        
