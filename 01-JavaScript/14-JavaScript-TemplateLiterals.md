Template literals allow us to embed expressions in our string literals

Vocab
- template literal - allow us to embed expressions in our string literals
- string interpolation - most useful and common implementation of template literal and is essentially the embedding of expressions in a string

String Interpolation -> most useful and common implementation of template literal and is essentially the embedding of expressions in a string
    ex.
        var fruit = "apple"

        console.log(`The fruit is a ${fruit}`)

        fruit = "orange"

        console.log(`Now the fruit is a ${fruit}`)

    - Important pieces
        - Back Tick Characters -> used to signal the start and end of a template string
        - A dollar sign ($) indicates the start of an embedded expression
        - The curly braces ({}) indicate the beginning and end of the javascript expression.  In this case, frui tis the expression we're asking JavaScript to evaluate.

A more complex example with pre ES6 at beginning
    var customer = {
        name: "Foo"
    }
    var card = {
        amount: 7,
        product: "Bar",
        unitPrice: 42
    }

    // Pre ES6

    var message = "Hello " + customer.name + " want to buy " + card.amount + " " + card.product + " for a total of " + (card.amount * card.unitPrice) + " bucks?"

    // With ES6 string interpolation

    var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitPrice} bucks?`

    * Notice we gain easy to write expressions and very readable code