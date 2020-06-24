Classes are the blueprint for objects and are reusuable and customizable, much like functions

Vocab
- class - particular type of function that contain data and behavior.  They are the blueprints of objects and are reusuable and customizable
- object - variables that contain a collection of key:value pairs and are the cross-section of data and behavior (methods) -> can store variables that have information like an array.  Can have a function in it as well.
- constructor - a special method for creating and initializing objects
- this - a JavaScript keyword that refers to the object it belongs to
- new - used when creating a new instance of a class (an object)
- PascalCase - case convention used for classes, similar to camleCase, but the first word is capitalized

Classes are a particular type of function that contain data and behavior.  Classes are the blueprints of objects and classes have their own scope.
    - There are particular keywords that are used to create and access information within a class:
        - constructor -> special method for creating and initializing objects
        - this -> a JavaScript keyword that refers to the object it belongs to
        - new -> used when creating a new instance of a class (an object)
    - Class syntax convetions:
        - Class names are always capitalized
        - Class names are PascalCased
        - Instance of classes (objects) are always lowercase
    
    ex. of a class
        class Squirrel{
            constructor(){
                this.nutCount = 0
            }

            storeNut(){
                this.nutCount += 1
            }

            eatNut(){
                this.nutCount -= 1
            }
        }
            // creating the instance of the class, saved as a variable
            // rocky now has access to the class methods
            var rocky = new Squirrel()

            console.log(rocky.nutCount) --> 0

            rocky.storeNut()
            console.log(rocky.nutCount) --> 1

            rocky.storeNut()
            console.log(rocky.nutCount) --> 2

            rocky.eatNut()
            console.log(rocky.nutCount) --> 1

Classes are reusuable, just like functions.  Each object created from the class is independent from each other.
    ex.
        class Squirrel{
            constructor(){
                this.nutCount = 0
            }

            storeNut(){
                this.nutCount += 1
            }

            eatNut(){
                this.nutCount -= 1
            }
        }

            var rocky = new Squirrel()
            var alvin = new Squirrel()

            alvin.storeNut()
            alvin.storeNut()

            console.log("Rocky has ", rocky.nutCount ) --> "Rocky has 0"
            console.log("Alvin has ", alvin.nutCount ) --> "Alvin has 2"

Class instances can be used like any other data type in JavaScript.  We can rewrite the above example like this:
    class Squirrel{
        constructor(){
            this.nutCount = 0
        }

        storeNut(){
            this.nutCount += 1
        }

        eatNut(){
            this.nutCount -= 1
        }
    }
        // create a new array
        var squirrels = []
        // pushes new squirrel objects into the array
        squirrels.push(new Squirrel())
        squirrels.push(new Squirrel())

        // accessing the object at array index 0
        squirrels[0].storeNut()
        squirrels[0].storeNut()

        // mapping over array to access the information from the squirrels array
        squirrels.map((value, index) => {
        console.log(`The squirrel at index ${index} has ${value.nutCount} nuts.`)
        })

Class instances can store any kind of data
    ex.
    class DiceRoller{
        constructor(){
            this.rolls = []
        }

        roll(){
            // generating a random number between 1 and 6 and pushing to the this.rolls array
            this.rolls.push(Math.ceil(Math.random() * 6))
        }

        lastRoll(){
            //logging the last roll added to the array
            return this.rolls[this.rolls.length - 1]
        }
    }

        var roller = new DiceRoller()
        console.log("Roll:", roller.lastRoll()) --> Roll: undefined

        roller.roll()
        console.log("Roll:", roller.lastRoll()) --> Roll: 6

        roller.roll()
        console.log("Roll:", roller.lastRoll()) --> Roll: 4

        console.log("All Rolls:", roller.rolls) --> All Rolls: [ 6, 4 ]

The constructor method can take arguments, creating objects with unique data
    ex.
    class Dog{
        constructor(name, age){
            this.name = name
            this.age = age
        }

        description(){
            return `${this.name} is a ${this.age} year old dog.`
        }
     }
        // now when creating the new object, the constructor method is expecting two arguments: a name and an age
        var rover = new Dog('Rover', 4)
        console.log(rover.description())--> "Rover is a 4 year old dog."

We can use the Dog class to create many different dog objects with different properties
    ex.
        var plato = new Dog('Plato', 8)
        var bella = new Dog('Bella', 11)

        console.log(plato.description()) --> "Plato is a 8 year old dog."
        console.log(bella.description()) --> "Bella is a 11 year old dog."


Objects are still just varaibles that reference a class.  Variables in JavaScript can be reassgined
    ex.
        var plato = new Dog('Plato', 8)
        var bella = new Dog('Bella', 11)

        console.log(plato.description()) --> "Plato is a 8 year old dog."

        console.log(bella.description()) --> "Bella is a 11 year old dog."
        bella = plato
        console.log(bella.description()) --> "Plato is a 8 year old dog."
        // !!!! bella got reassigned