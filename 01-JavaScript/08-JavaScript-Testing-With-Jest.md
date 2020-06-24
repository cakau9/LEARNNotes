- Testing is a process of creating automated quality assurance for your code.
- Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase
- Jest was created by Facebook and used by Twitter, Spotify and Airbnb

Vocab
- yarn - technology created by Facebook that manages dependency files
- Jest - JavaScript testing framework created by FaceBook that is designed to ensure correctness of any JavaScrpt codebase
- TDD - stands for Test Driven Development.  When we write our tests first then write the code, requires us to make them pass, making us think about our cdoe in a different, more logical way.  Breaking the code into a series of tests helps us break the big problem down into much smaller ones, making it easer to solve and write better code.  Makes reusability in the future less worrisome because you know refactoring won't break your app.
- red-green refactor - process of writing the test first, running your testing suite to see a failing test, writing the code, running your testing suit to see your test pass, refactor if necessary

Useful Commands
    - $ yarn jest

Set Up
    - Create a new directory
    - Add a file with the extension .test.js
    - $ yarn add jest
    - Write the tests and the code in the sam efile
    - $ yarn jest

Testing speaks volumes about you as developer.  You win, your coworkers win, your employer wins,  your users win, your future self wins.

Test Because:
    - Better code
    - Less bugs
    - Helps job hunt
    - Forces the developer to think about the input and output before beginning to code
    - Avoid feature creep- stay focused on essential piece of the program
    - Save you lots of time bug fixing a new feature
    - Communicates to the other developers the intent of the function
    - Allows for "safe" and confident refactoring of code

Test Driven Development ->
When we write our tests first then write the code, requires us to make them pass, making us think about our cdoe in a different, more logical way.  Breaking the code into a series of tests helps us break the big problem down into much smaller ones, making it easer to solve and write better code.  Makes reusability in the future less worrisome because you know refactoring won't break your app.
    Red-Green Refactor Process:
        - Write the test first
        - Run your testing suite to see a failing test
        - Write the code
        - Run your testing suit to see your test pass
        - Refactor if necessary

Testing Syntax with Jest
    - describe() -> Jest uses a method called describe() that runs other nested methods
    - test() -> takes a argument of a statement that explains in regular words what the test is doing
    - expect() -> this method calls the function being tested, passes any test-case arguments, and compares the output.

    ex. Test for a function called hello() that returns a string that says hi
        describe("hello", () => {
            test("returns a string that says hi", () => {
                expect(hello()).toEqual("hi")
            })
        })
    Run yarn jest -> It will fail since we haven't created the function yet (red part of red-green refactor)

    Build the function (the green part of red-green factor)
        const hello = () => {
            return "hi"
        }
    * There is NO console.log() or function call.  Jest handles all of that in the expect method

    ex. Another Example:
        // Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry
        // Notice this test contains two expect methods - one for each possible outcome

        describe("areYouHungry", () => {
            test ("returns eat food or keep working based on input", () => {
                expect(areYouHungry("yes")).toEqual("eat food")
                expect(areYouHungry("no")).toEqual("keep working")
            })
        })
        Run yarn jest -> Test will fail!
        Create function:
        
        const areYouHungry = (string) => {
            if(string === "yes"){
                return "eat food"
            } else if(string === "no") {
                return "keep working"
            }
        }   
        Run yarn jest again -> Test will pass!

Example using variables -> can be useful to create variables local to the test method.  These variables are only available within the scope of the test

    describe("addGranola", () => {
        let groceryList = ["apples", "carrots", "oatmeal"]
        let result = ["apples", "carrots", "oatmeal", "granola"]
        test ("adds granola to the end of an array", () => {
            expect(addGranola(groceryList)).toEqual(result)
        })
    })

    const addGranola = (array) => {
        return array.concat("granola")
    }
