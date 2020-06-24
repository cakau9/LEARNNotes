Higher-order functions are functions that take in another function as an argument OR returns a function as an output.

Vocab
- higher-order function - functions that take in another function as an argument OR returns a function as an output.
- value, index, array - built-in arguments of the .map and .filter functions.  Value is the value at each index of an array.  Index is the index of the array that we are interating through.  Array is the array that the higher-order function was called on.

A higher order function is simply a function that either takes in another function as an argument or returns another function as an output.
    - .map and .filter are two higher-order functions that have three built-in arguments.  What the arguments are named is arbitrary, but the order will always be the same.  They have to take at least one argument (value) but can take two or three if needed.
        - .map(value, index, array)
        - .filter(value, index, array)
        1) Value - the value at each index of an array.
        2) Index- the index of the array that we are interating through.
        3) Array- that higher-order function was called on.

.map() function interates through an array and returns a new array of the same length.
    ex. using a for loop:
        var myArray = [5, 3, 2, 9, 8]
    
        for(let i=0; i < arr.length; i++) {
        console.log(myArray[i * 3])
    }

    ex. using .map():
        var myArray = [5, 3, 2, 9, 8]

        const multiplier = myArray.map(value => {
            return value * 3
        })
        console.log(multiplier)

    more concise way:
        var myArray = [5, 3, 2, 9, 8]

        const multiplier = myArra.map(value => value * 3 )

        console.log(multiplier)
    
    ex. .map wrapped logic in a function that can take an array and make it reusable:
        var myArray = [5, 3, 2, 9, 8]
        const multiplier = (array) => {
            return array.map(value => value * 3)
        }
        console.log(multiplier(myArray))
    * Note that .map()itereates through the array AND returns a new array

    ex. pseudcoded:
    // create a function that takes in an array and returns each word capitalized
        var fruitArray = ["banana", "mango", "apple", "grape"]

        // declare a function that takes in an array
        const capitalizer = (array) => {
        // create a local variable that maps through the array
        let eachItem = array.map(value => {
            // with each value access the first index and capitalize the letter then concatenate the remainder of the word
            return value[0].toUpperCase() + value.substring(1)
        })
        // return the local variable joined into a string
        return eachItem.join(" ")
        }
        // logging the function and pass in the array
        console.log(capitalizer(fruitArray))

        *Note that this function has a return for the outer function AND a return for the higher-order function


.filter() loops through an array and returns a new array with only the values that are truthy or the values that satisfy your stated condition.  Filter will return a subset of the given array.
    ex. with for loop:
        var numbersArray1 = [1, 2, 7, 4, 10, 8, 9]
    
        const onlyEven = (array) => {
            let newArr = []
                for(let i=0; i<array.length; i++){
                    if(array[i] % 2 === 0){
                    newArr.push(array[i])
                    }
                }
                return newArr
        }       
        console.log(onlyEven(numbersArray1))
    
    ex. using .filter():
        var numbersArray1 = [1, 2, 7, 4, 10, 8, 9]

        const onlyEven = (array) => {
            return array.filter(value => value % 2 === 0)
        }   
        console.log(onlyEven(numbersArray1))
    
    ex. with pseudocode:
        // create a function that returns only the values at the odd indexes
        var numbers = [4, 24, 5, 9, 0, 78]

        // declare a function that takes in an array
        const getOnlyOddIndex = (array) => {
            // return a higher-order function that takes in the value and the index
            return array.filter((value, index) => {
            // return only the values that have an odd index
            return index % 2 !== 0
            })
        }
        // log the function and pass in the array
        console.log(getOnlyOddIndex(numbers))

When deciding between .map and filter, remember that .map will do something to each item in an array and return the same number of items.  Whereas, .filter() will return a new, smaller array filtered based on your specified criteria.