Classes can inherit information from other classes creating a parent-child relationship and help keep code from being repetitve

Vocab
- inheritance - creating another class that can inherit from another class but also have its own specialized, unique data and methods.  Parent-child inheritance relationship.
- Object Oriented Programming (OOP) - Object-oriented programming (OOP) refers to a type of computer programming (software design) in which programmers define the data type of a data structure, and also the types of operations (functions) that can be applied to the data structure.
In this way, the data structure becomes an object that includes both data and functions. In addition, programmers can create relationships between one object and another. For example, objects can inherit characteristics from other objects.
- extends - used in the declaration of the class, extending the data and behavior of the parent class (or the class we are inheriting from)
- super() - within the constructor method we call super() which passes the attributes from the constructor in the parent class

Think of application from an Object Oriented perspective, we can think of it as a collection of objects, and actors who interact with those objects
    - A car is an object made of many smaller objects.  It has wheels, a horn, an engine that are all used by a driver.  
    - Classes define attributes (data) and behaviors (methods).  An engine has attributes such as horsepower, oil level, and rpm.  It has behaviors as well like start, accelerate, and stop.
    - Classes themselves are not real things, but rather definitions of things.  A class is the product of an engineer sitting at a desk with a pencil and paper designing exactly what the engine is going to be.  Those plans go to the manufacturing floor (our running application) and are made into real things which can interact with other things (objects).
ex. of class Engine ->
        class Engine{
            constructor(){
                this.oilLevel = 100
                this.rpm = 0
            }
        }

        // calling new Engine() is just like sending the plans to the production floor to have it built
        let engine = new Engine()
        console.log(engine) --> Engine { oilLevel: 100, rpm: 0 }

        // now that we have an instance of our engine to interact with

        console.log("oil:", engine.oilLevel) --> "oil:" 100

        console.log("rpm:", engine.rpm) --> "rpm:" 0

If we want to turn it on, we can add a method to the class that turns the engine on and off

ex.
    class Engine{
        constructor(){
            this.oilLevel = 100
            this.rpm = 0
        }

        start(){
            this.rpm = 500
        }

        stop(){
            this.rpm = 0
        }
    }

        let engine = new Engine()

        console.log("rpm:", engine.rpm) --> "rpm:" 0

        // call the method start on the engine object variable to alter the rpm
        engine.start()
        console.log("rpm:", engine.rpm) --> "rpm:" 500

        engine.stop()
        console.log("rpm:", engine.rpm) --> "rpm:" 0

We are not limited to only having one type of engine.  There can be many variations, all of which share attributes and behaviors, but have additional attributes and behavior that are unique.  JavaScript classes allow us to mdoel this situation by using inheritance.  Engine class has properties that are common to all engines, but we can create another class that can inherit from the Engine class but also have its own specialized data and methods.  This is a parent-child inheritance relationship
    ex.
        class Engine{
            constructor(){
                this.oilLevel = 100
                this.rpm = 0
            }

            start(){
                this.rpm = 500
            }

            stop(){
                this.rpm = 0
            }
        }
We can definite a new type of engine called TurboEngine that inherits attributes from the base Engine class.  To create inheritance we need two new JavaScript keywords:
    - extends -> used in the declaration of the class, extending the data and behavior of the parent class (or the class we are inheriting from)
    - super -> within the constructor method we call super() which passes the attributes from the constructor in the parent class

    ex.
        class TurboEngine extends Engine{
            constructor(){
                super()
            }
         }
        var turbo = new TurboEngine()
        console.log(turbo) --> TurboEngine { oilLevel: 100, rpm: 0 }
    *By using extends and calling super, the turbo object variable now contains all the information of the Engine class.  

The TurboEngine class can have information that is specific to its class like attributes (data) like horsepower and behavior (methods) like accelration and decelration
    
    ex.
        class TurboEngine extends Engine{
            constructor(){
                super()
                this.horsepower = 450
            }
            accelerate(){
                this.rpm = 750
            }
            decelerate(){
                this.rpm = 0
            }
        }
            var turbo = new TurboEngine()
            console.log(turbo)
            --> TurboEngine { oilLevel: 100, rpm: 0, horsepower: 450 }

            turbo.accelerate()
            console.log("rpm:", turbo.rpm)
            --> "rpm:" 750
    *TurboEngine now has its own properties and properties passed from its parent class.


Here's another class called StockEngine that also inherits from Engine
    ex.
        class StockEngine extends Engine{
            constructor(){
                super()
                this.horsepower = 250
            }
            accelerate(){
                this.rpm = 250
            }
            decelerate(){
                this.rpm = 0
            }
        }
        var stock = new StockEngine()
        console.log(stock)
        --> StockEngine { oilLevel: 100, rpm: 0, horsepower: 250 }

        stock.accelerate()
        console.log("rpm:", stock.rpm)
        --> "rpm:" 250

        stock.decelerate()
        console.log("rpm:", stock.rpm)
        --> "rpm:" 0
    *StockEngine has access to information from parent class Engine and its own unique data and methods