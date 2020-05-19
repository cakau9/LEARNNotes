Arrays are variables that share collections of data in an index list.  They are data types and are not primitive.  
    - Because they are indexed, the elements can be accessed by their value or by their location within the array.  
    - Index always starts at 0
Anatomy of an array:
    var numbers = [1, 2, 3, 4, 5]
        - Opening and closing square brackets, with a comma between each value
        - A value between each comma
        - Hidden index that exists behind each value
            index 0 = 1, index 1 = 2, index 2 = 3, index 3 = 4, index 4 = 5 
    *Note that numbers in an array don't need quotes around them, but strings do need quotes around them.
Vocab
- arrays - are a data type that is not primitive and are variables that share collections of data in an index list.  The elemends can be accessed by their value or by their location within the array.
- index - hidden number that exists behind each value.  Always starts at 0.
- value - value is the content in the array, so the number or strings that are inside the square brackets.
- mutators/setter methods - methods that permanently change the original array.
- accessor/getter methods - methods that access an array and do not change th eoriginal array
- destructuring - special way of assigning variables in JS.  Allows you to take something like an array or object and unpack their values into individual variables.

Accessing Elements - we can use our variable and an index number in square brackets to pull out value sin an array.
    ex. var letters = ["L", "e", "a", "r", "n", " ", "S", "D"]
        console.log(letters[3]) -> "r"
        console.log(letters[7]) -> "D"
        console.log(letters[8]) -> undefined

Changing Elements - reassign values by using the variable, square brackets, and the index with an '=' and a new value.
    ex. var letters = ["L", "e", "a", "r", "n", " ", "S", "D"]
        letters[2] = "see"
        console.log(letters) -> ["L", "e", "see", "r", "n", " ", "S", "D"]
        letters[4] = 100
        console.log(letters) -> ["L", "e", "see", "r", 100, " ", "S", "D"]

Built-In Methods - JS has array methods build in that help us manipulate arrays.  Typically use dot notation in front and goes behind the variable name we want to manipulate.  typeof is an exception and goes in front of the variable name (this gives us type of data we are working with so "number" or "string" or "boolean" etc.) and does not have a dot.
    ex. .length -> gives the length of an array (read only property, not a function)
        var array1 = [1, 1, 10, 9, 3, 4, 5]
        console.log(array1.length)-> 7
        typeof -> returns a string indicating the type of the unevaluated operand
        console.log(typeof 42) -> "number"

Mutators/Setters - methods that permanently change the original array.
    - .push() -> pushes a value into the end of an array
        ex. var colors = ["red", "green", "blue"]
            colors.push("black", "teal")
            console.log(colors) -> ["red", "green", "blue", "black", "teal"]
    - .pop() -> takes off last item in an array
        ex. colors.pop()
            console.log(colors)-> ["red", "green", "blue", "black"]
    - .shift() -> removes the first value in an array
        ex. colors.shift()
            console.log(colors)-> ["green", "blue", "black"]
    - .unshift(value)-> adds a new element to the beginning of array
        ex. colors.unshirt("magenta")
            console.log(colors)-> ["magenta", "green", "blue", "black"]
    - .reverse() -> reverses the order of the values in an array
        ex. colors.reverse()
            console.log(colors)-> ["black", "blue", "green", "magenta"]

Accessors/Getters - methods that access an array and do not change the original array
    - .join("") -> converts all values into an array to a string.  Be aware of spacing between the quotes in the parantheses. It will yield different results.
    - .indexOf() -> gives the index of a given value
    - .lastIndexOf() -> gives the last index of a value (usually used when two values are the same)
    - .split("") -> takes a string and splits into an array.  Like, .join, be aware of spacing between quotes in parantheses if you want to access each letter individually etc.
    - .concat() -> merges two or more arrays to form one combined array.
        ex. var letters = ["m", "o", "n"]
            var letters2 = ["d", "a", "y"]
            console.log(letters.concat(letters2) -> ["m", "o", "n", "d", "a", "y"]
            - Because .concat is an accessor method, we need to a way to use our combined array later in a program by setting it to a variable.
            var combined = letters.concat(letters2)
            console.log(combined) -> ["m", "o", "n", "d", "a", "y"]
        ex. var joined = combined.join("")
            console.log(joined) -> "monday"
            var joined = "monday"
        ex. var newArray = joined.split("")
            console.log(newArray) -> ["m", "o", "n", "d", "a", "y"]
        ex. var arr1 = ["S", 2, "y", 3, "y", 1, "t"]
            console.log(arr1.indexOf("t")) -> 6
        ex. console.log(arr1.lastIndexOf("y")) -> 4

Array Destructuring - special way of assigning variables in JavaScript.  Allows you to take something like an array or an object and unpack their values into individual variables.  
    - Array Destructuring Assignment:
        1) Starts with a variable keyword
        2) In square brackets, lists some variable names
        3) Uses the assignment operator to assign the array to unpack
    ex. let [firstVal, secondVal] = [1, 2]
        console.log(firstVal) -> 1
        console.log(secondVal) -> 2
        - Variables are assigned in order, as in the first variable name is assigned the first value of the value array.
            
            