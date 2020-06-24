Functions can utilize arrays, loops, and conditionals in combination to procure a particular outcome.
    ex. Create a function that takes in an array and returns a new array with only even numbers

    var myArr2 = [1, 2, 7, 4, 10, 8, 9]

    const onlyEven = (array) => {
        let newArr = []
        for(let i=0;i<array.length;i++){
            if(array[i] % 2 ===0){
                newArr.push(array[i])
            }
        }
        return newArr
    }
    console.log(onlyEven(myArr2))
    - Note we created an empty array and used the .push method populate it.

Nested Conditional Statements -> created to return only a certain item from an array
    ex. var myArr1 = [1, 2, 7, 8, 10, 8, 9]

    const onlyEven = (array) => {
        let newArr = []
        for(let i=0; i<array.length; i++) {
            if(array[i] % 2 === 0){
                newArr.push(array[i])
            }
        }
        return new Arr
    }
    console.log(onlyEven(myArr1))