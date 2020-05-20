Looping is the process of executing a block of code over and over again and can be performed on an interable data type like a string, or most often, an array.  

Loops must define a starting location (ex. let i=0;), a condition to be met that will end the loop(ex.i<101;), and what executable action will take place on every loop (ex.i++).

Vocab
- for loop - most common type of loop and loops through a block of code a number of times
- let - 
- i (index) - hidden value given to each value in the array.  Always starts at 0.
- iteration - goes through an array and does something to each element.
- scope - refers to where a variable is accessible or visible.  Two main scopes are local and global.
- local scope - also known as block scope.  Variables in local scope can only be used within the block/function/loop that it is assigned.
- global scope - can be seen and used anywhere in the program.

In terminal, if you get caughg in an infinite loop, contrl c will stop it

For Loop - most common type of loop
    - For statement creates a loop that is executed as long as a condition is true.  It will continue to run until the condition becomes false.
        ex. for(let i=0; i < 5 ; i ++) {
            console.log(i)
        }
            - let i=0 - where the index starts (all indexes start at 0)
            - i < 5 - where we want the loop to stop in the array (this case, end at 5)
            - i++ - how many interations we want the loop to go through (++ is up by one, -- is down by one.  Can also iterate i += 2 etc.)
            - console.log(i) - what we want to do after each loop
    - Loops are especially helpful when wanting to iterate through and array and do something to each element.
        ex. var arr = [5, 3, 2, 9, 8]
            for (let i=0; i< arr.length; i++){
                console.log(arr[i] * 3)
            }
            arr[0] becomes 5*3 = 15, arr [1] becomes 3 * 3 = 9 etc.
    - Can filter an array based on certain conditions (if/else)
        ex. //write a loop that logs all numbers except 5
            //expected output [3, 2, 7]
            var arr = [5, 3, 5, 2, 5, 7]
            for (let i= 0; i< arr.length; i++){
                if(arr[i]! == 5) {
                    console.log(arr[i])
                }
            }

- Scope refers to where a variable is accessible or visible (see 1-JavaScript-Intro.md):
    1) Global - variables that can be seen and used anywhere in a program
        var -> puts variable on global scope.  May or may not be reassigned
    2) Local - "block scope" -> can only be used within the block/function/loop it is assigned.
        let -> only be used in the block whcih it is defined.  Could be reassigned elsewhere in program.
        const -> variable will NOT be reassgined

- For/In Loop - loops through the properties of an object
- For/Of Loop - loops through the values of iterable object
- While - loops through a block of code while a specified condition is true
- Do/While - also loops thorugh a block of code while a specified condition is true.
    