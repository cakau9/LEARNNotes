Objects are variables that contain a collection of key:value pairs and are the cross-section of data and behavior (methods) -> can store variables that have information like an array.  Can have a function in it as well.

Vocab
- JSON - JavaScript Object Notation collections of key:value pairs which is an easy way to package data
- key:value pairs - objects are collections of these, the key is a value identifier
- methods - when a function belongs to an object 
- dot notation - allows us to access the value from the object by calling the name of the variable and the key
- this - a JavaScript keyword that references the object.  Can be used to create a variable accessing the value within the object.
- destructuring - special way of assigning variables in JavaScript.  Allows you to take something like an array or object and unpack tehir values into individual variables.

Object with Data: JSON
- JSON - stands for JavaScript Object Notation
- Objects - collections of key:value pairs, can have lots of keys, but all must be unique
    ex. Object in JSON:
    var person = {name: "Alex Keaton", phone: 123456789}

    // OR written like:

    var person = {
        name: "Alex Keaton",
        phone: 123456789
    }
    *In this example the keys are name and phone and values are "Alex Keaton" and 123456789.  We can access the value from the object with dot notation by calling the name of the variable and the key:

        ex. console.log(person.name) -> "Alex Keaton"
            console.log(person.phone) -> 123456789

Object with Behavior
- Objects can also contain functions.  When a function belongs to an object it is called a method.  
- this is a JavaScript keyword that references the object
- this can be used to create a variable accessing the value within the object
    ex. of a method
    var person = {
        name: "Alex Keaton",
        phone: 123456789,
        getData: function() {
            return `${this.name}'s phone number is ${this.phone}`
        }
    }       
    console.log(person.getData())
    --> "Alex Keaton's phone number is 123456789"

    Iterating Over Objects
    Objects can be single indexes of an array.  You can use .map() or .filter() on arrays of objects.
        ex. using .filter() to return an array with only the dogs
        var toons = [
        {name: "Brian", animal: "dog"},
        {name: "Tom", animal: "duck"},
        {name: "Bugs", animal: "dog"},
        {name: "Daffy", animal: "duck"},
        {name: "Felix", animal: "dog"},
        {name: "Tabby", animal: "cat"}
        ]
        var animal = toons.filter(value => value.animal === "dog")
        console.log(animal)--> [ { name: 'Brian', animal: 'dog' }, { name: 'Bugs', animal: 'dog' }, { name: 'Felix', animal: 'dog' } ]

Object Destructuring
- The destructuring assignment is really just a special way of assigning variables in JavaScript. 
    - Allows you to take something like an array or object and unpack their values into individual variables.  This is the most immediately useful type of destructuring.
    - When you are destructuring an object, you are essentially taking the properties of an object and breaking them out into individual, recallable variables
        ex. 
            // A person object
            var person = {
            firstName: "Bruce",
            lastName: "Wayne"
            }

            // Printing property values
            console.log(person.firstName) --> "Bruce"
            console.log(person.lastName) --> "Wayne"
            // Printing a full name
            console.log(`${person.firstName} ${person.lastName}`) --> "Bruce Wayne"
        ex. With Object Destructuring
            // A person object
            var person = {
            firstName: 'Bruce',
            lastName: 'Wayne'
            }

            // Making variables for firstName and lastName using destructuring
            var { firstName, lastName } = person

            // Printing property values
            console.log(firstName) --> "Bruce"
            console.log(lastName) --> "Wayne"
            // Printing a full name
            console.log(`${firstName} ${lastName}`) --> "Bruce Wayne"
- Object destructuring assignment:
    - Starts with a variable keyword
    - List the variable names with curly braces -> variable names must correspond to property names of the object
    - Uses the assignment operator to assign the object unpack
- Objct destructuring can save you time when it comes to objects with nested properties.  Allows you to make quick work of extracting and manipulating object properties.
    ex. more destructuring -> array
        const items = ['car', 'bike', 'plane'];
        const [car, bike, plane] = items;

        console.log(car); // 'car'
        console.log(bike); // 'bike'
        console.log(plane); // 'plane'
    
    ex. skipping items -> array
        const items = ['car', 'bike', 'plane'];
        const [,,plane] = items;

        console.log(plane); // 'plane'
    
    ex. nested arrays
        const items = ['car', ['bike', 'plane'], ['boat']];
        const [car, [bike, plane], [boat]] = items;

        console.log(car); // 'car'
        console.log(bike); // 'bike'
        console.log(plane); // 'plane'
        console.log(boat); // 'boat'
    
    ex. combing the destructuring syntax with the rest syntax -> array
        const items = ['car', 'bike', 'plane', 'boat'];
        const [car, ...transportation] = items;

        console.log(car); // 'car'
        console.log(transportation); // ['bike', 'plane', 'boat']

- Destructuring syntax can help when accepting parameters in functions.  Instead of requesting specific arguments in a specific order, it would be a lot easier to just pass one object and then expose only the needed properties using the destructuring syntax
    ex.
        const carFunction = ({ brand, engine: { horsepower, liters }}) => {
        return `${brand} with engine of ${horsepower} horsepower and ${liters} liters`
        }

        const car = {
        brand: 'ferrari',
        type: 'sportscar',
        engine: {
            horsepower: 600,
            liters: 4,
            fuel: 'gas'
        },
        wheels: 4
        };

        console.log(carFunction(car)); // ferrari with engine of 600 horsepower and 4 liters
    
    ex. returning multiple values
            const getCars = () => {
                return [
                    {
                    brand: 'ferrari',
                    type: 'sportscar',
                    engine: {
                        horsepower: 600,
                        liters: 4,
                        fuel: 'gas'
                    },
                    wheels: 4
                    },
                    {
                    brand: 'porsche',
                    type: 'sportscar',
                    engine: {
                        horsepower: 455,
                        liters: 6,
                        fuel: 'gas'
                    },
                    wheels: 4
                    },
                ];
                }

                const [ferarri, porshe] = getCars()
                console.log(ferarri, porsche);
    
    ex. can also do this with objects as well ->
        const getCar = () => {
            return {
                brand: 'ferrari',
                type: 'sportscar',
                engine: {
                horsepower: 600,
                liters: 4,
                fuel: 'gas'
                },
                wheels: 4
            }
            }

            const {brand, type} = getCar()
            console.log(brand, type);
