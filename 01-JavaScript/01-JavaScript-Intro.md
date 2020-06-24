JavaScript is a versatile and powerful scripting language used to make webpages dynamic.  It interacts with the user (popups, scrolling etc.), and is processed by being read.  It manipulates data and has categories of data types.

Vocab
- data types - used in JavaScript, including 6 primitives that help give JavaScript info.
- concatenation - combines a series of strings into one string.
- type coercion - JavaScript gives us strange and unpredictable behavior when combining different data  types.
- floats - whole numbers written as decimals
- modulo operator - represented with a %, gives us the remainder of division problems.
- bang operator - represented with a ! , negates value, used to declare something isn't there.

<!-- To Run JS in Terminal, type "node" and enter.  Control C C to exit out of out of JS -->

JavaScript is a loosely typed lanaguage, meaning the programmer does not have to declare the type of data contained in a variable. 

Basic Data Types That are Primitive - can't be broken down any further.
    1) Numbers - can be integers (positive, negative, zero) as well as fractions of a whole number written as a decimal, called a float.  
        Arithmetic       1 -> 1      1.0 -> 1
        Addition         1+1 -> 2    0.1+0.3 -> 0.4
        Subtraction      2-2 -> 0    5-4 -> 1
        Division         2/2 -> 1    2/0 -> Infinity    -2/0 -> -Infinity
        Multiplication   8*2 -> 16   5*4 -> 20           
        Modulo           2%2 -> 0    3%2 -> 1           18%5 -> 3
        Exponents        7**2 -> 49  123e5 -> 12300000

    Modulo operator, represented with a % gives us the remainder of a division problem. 
    *Great way to determine odd or even numbers*
        ex. num % 2 === 0 (even), num % 2 === 1 (odd)

    2) Strings - store words or characters in " " .
        - Concatenation - when we use + on strings, it combines them.  Also a bulit in method that can be called using .concat 
            ex. "hell"+"o" -> "hello"       "hello"+"world" -> "hello world"
                "3+4" -> "3+4"              "3+4"+"5" -> "3+45"
        - Built-In String Functions/Methods - a JavaScript method is a proptery containing a function definition.  A function is a JavaScript procedure, which is a set of statemetns that performs a task or calculates a value.  To use a function you must definte it somewhere in the scope from whcih you call it (unless it is built-in).
            ex. "hello".charAt(1) -> "e"
                "hello".length -> 5
                "hello".includes("he") -> true

    3) Boolean - expressions in JavaScript that return true or false.  Even though true and false are words, they are not strings.  They represent the value of true/false. 
        ex. true -> true        false -> false      1-> true        0-> false
        Comparison Operators - will return a Boolean value
                Equality Operators - 
                    true == false -> false      3=="3" -> true (true becuase of type coercion)
                Strict Comparison-
                    true === false -> false     3==="3" -> false

                Relational Operators -
                    greter than     2 > 0 -> true    greater than or equal to    0 >= 2 -> false
                    less than       3 < 6 -> true    less than or equal to       -4 <= 0.8 ->  true
                
                Logical Operators - can return any type of data, but uses the Boolean principle data type to determine the outcome.
                    and && - both sides must be true for this to return a true value
                        true && false -> false      true && true -> true       
                    or || - only one side needs to be true to return a true value
                        true || false -> true       false || false -> false
                    not ! - bang operator cancels out 
                        !true -> false           !false -> true       
                        true != false -> true    true != true -> false   !(true && false) -> true
    
    4)  Undefined - if a variable is created but not assigned a value, variable is undefined.  Can empty objects using undefined values.  

    5) Null - equals nothing else in your program.  It's not zero or false.  It is nothing.

    6) Symbol - unique and immutable, resembles a built-in object class

    Type Coercion - happens because JavaScript is loosely typed.  Combining data from different types can cause JavaScript to process information in strange and unpredictable ways when it is trying to be helpful an dmake sense of the operators.  Best to generally avoid. 
        ex. "2" + 2 -> 22       !0 -> true      !3 -> false     true * 9 -> 9   false * 9 -> 0

Variables - used to store information and must be declared and assigned a value using an equals sign.  They are dynamic and can be manipulated.  
        ex. variable declared
                var a -> undefined        var a + 5-> Nan (not a number)
            variable declared and assigned
                var a = 2 -> 2
                a + 5 -> 7       a * 7 -> 14        a + a -> 4
            variable reassigned
                var a = "hello" -> "hello"
                a.length -> 5    a + a = "hello"    a + 5 = "hello 5"
            new variable
                var b = "world" -> "world"
                a + b = "hello world"
            new variable using existing variables
                var c = a+b -> "hello world"
                a -> "hello"
                b -> "world"
                c -> "hellow world"
        
    There are three different types of variables:
        1) var - globally scoped or local scoped and be re-declared and reassigned
            ex. var greeter = "hey hi"
                function new function () {
                    var hello = "hello"
                }
            - var greeter is globally scoped because it exists outside the function, while var hello is function or locally scoped

            ex. var tester = "hey"
                function new function (){
                    var hello = "hello"
                }
                console.log(hello) -> error: hello is not defined
            - error occurs because var hello is not avaiable outside of the function.
                
            ex. Problem with using var
                var greeter = "hey hi"
                var times = 4
                if (times > 3) {
                    var greeter = "say hello instead"
                }
                console.log (greeter) -> "say hello instead"
            - since it is true, it returns the greeter that is inside the block.  We didn't realize greeter was defined before, but it reassgined the variable since we used var in block of code.  To prevent this, use let or const.
                    
        2) let - block scoped or local scoped and preferred for block due to isssue with var.  A block is a chunk of code bounded by { }. 
            ex. let greeting = "say hi"
                let times = 4
                
                if (times > 3) {
                    let hello = "say hello instead"
                    console.log(hello) -> "say hello instead"
                }
                console.log(hello) -> error: hello is not defined
            - console logging outside of the function returns not defined because let is local scoped so this console.log out side of the curly braces can not get to let hello.  When console logging inside of the curly braces, it will return let hello without any issues.

        3) const - block scoped and cannot be updated or redeclared.  Protects variables from being reassigned.
            





    




