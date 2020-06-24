Ternary Operators are used in situations where there are only two outcomes, similar to if/else statements.  Allow for code to be more concise, but be careful that it is still comunicated clearly.

Ternary operators work ONLY for exactly two outcomes:
    - If the condition is met - an evaluation that is truthy
    - If the condition is not met - an evaluation that is falsey

Consider this example that has two possible outcomes so can be refactorted using a ternary operator
    ex.
        var age = 20

            if(age >= 16){
            console.log("You are old enough to drive.")
            } else {
            console.log("You are not old enough to drive.")
            }

Ternary Operator Anatomy
    - The condition that you are evaluating.  The outcome of the evaluation should be a boolean value or coerce to a boolean value
    - A question mark ? that will separate the condition from truthy outcome
    - A colon : that will separate the truthy outcome from the falsey outcome

    ex. Example aboove refactored
        var age = 20

        age >= 16 ? console.log("You are old enough to drive.") : console.log("You are not old enough to drive.")

A few more examples:
    ex.
        const greeter = (myName) => {
            return myName ? `Hey there, ${myName}` : "Hey there, you!"
        }
        console.log(greeter(null))
        console.log(greeter("LEARN Student"))
    
    ex. Light switch on or off
        const toggler = (onOff) => {
            return isToggled === "on" ?
            "Turn switch off." :
            "Turn switch on."
        }
        console.log(toggler("on"))
        console.log(toggler("off"))

Switch Statements - covered in beginning of JavaScript notes, but use if you want a specific outcome for sure.
    ex. switch (month)
            case "September"
        return "it's September"
            case "October"
        return "it's October"
