Spread syntax introdued in ES6 update and expands an interable to its indvidual elements.  It allows a dynamic number of arguments to be passed in a function

Vocab
- spread syntax - allows an interable to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. Indicated with three . (...)
- iterable - array or string

Array Concatenation ->
Historically you would use .concat() method to join 2 arrays, but the sprad operator accomplishes the same task
    ex. concat() method
            var arr1 = [0, 1, 2]
            var arr2 = [3, 4, 5]

            var combined = arr1.concat(arr2)

            console.log(combined)
            --> [0, 1, 2, 3, 4, 5]
    
    ex. Spread Operator

            var arr1 = [0, 1, 2]
            var arr2 = [3, 4, 5]

            var combined = [...arr1, ...arr2]
            console.log(combined)
            --> [0, 1, 2, 3, 4, 5]

Array Duplication -> makes duplicating an array very simple.
    ex.
        var arr1 = [1, 2, 3]
        var arr2 = [...arr1]

        console.log(arr2) --> [1, 2, 3]

        console.log(arr1) --> [1, 2, 3]

The spread operator, just like concat and map and slice are non destructive
    ex.
        var arr1 = [1, 2, 3]
        var arr2 = [...arr1]
        arr2.push(4)

        console.log(arr2) --> [1, 2, 3, 4]

        console.log(arr1) --> [1, 2, 3]

        // arr1 remains unaffected

Passing a dynamic number of arguments -> gives us a way to handle cases in which we are passing an unknown number of arguments to a function or method
    ex.
    // Before ES6

    function createSentence(w1, w2, w3) {
    return w1 + w2 + w3
    }

    console.log(createSentence("hello", "there", "world"))
    --> "Hello there world"

    // With spread operator

    createSentence(...words){
    return words.join(" ")
    }

    console.log(createSentence("hello", "y'all", "what's", "up", "doc"))
    --> "hello y'all what's up doc"

