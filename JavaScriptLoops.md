Looping is the process of executing a block of code over and over again and can be performed on an interable data type like a string, or most often, an array.  

Loops must define a starting location (ex. let i=0;), a condition to be met that will end the loop(ex.i<101;), and what executable action will take place on every loop (ex.i++).

In terminal, if you get caughg in an infinite loop, contrl c will stop it

For Loop - most common type of loop
    - For statement creates a loop that is executed as long as a condition is true.  It will continue to run until the condition becomes false.
        ex. for(let i=0; i < 5 ; i ++) {
            console.log(i)
        }
            - let i=0 - where the index starts (all indexes start at 0)
            - i < 5 - where we want the loop to stop in the array (this case, end at 5)
            - i++ - how many interations we want the loop to go through (++ is up by one, -- is down)
            - console.log(i) - what we want to do after each loop
    - Loops are especially helpful when wanting to iterate through and array and do something to each element.
        ex. 
    