Vocab
- state - an object that stores a component's dynamic data and determines how the component renders and behaves
- props - short for properties, keyword in React for passing information from one component to another.  It is "read only", so cannot be updated.  It gives us the ability to pass data down to nested components. We can pass information as props and also behavior.
- input, value, onChange - input needs both a value and onChange because it has its own internal state so we need to use the props value and onChange to pass the proper context into it.  Value is the state of the object and onChange calls a method called handleChange that will collect the information entered in the input and update state.
- dumb/display component - component that doesn't hold state
- smart/logic component - component that holds state
- DOM event, often shortened to e -

Step 1 -> 
    - Let's take a closer look at the difference between component state and props by adding an input element to the page
    - We'll create a smart component that holds state and passes information toa child component called Greeter.

    ex. src/App.js

    import React, { Component } from 'react'
    // importing the Greeter component
    import Greeter from './components/Greeter'

    class App extends Component{
        constructor(props){
            super(props)
            // creating a state object that contains a key of "name" and a value of "Bob"
            this.state = {
            name: "Bob"
            }
        }

        render(){
            return(
            <div>
                {/* <Greeter /> is getting passed the information from the state object as props called "name" */}
                <Greeter
                name={ this.state.name }
                />
            </div>
            )
        }
    }
    export default App

Step 2 ->
    - The child component Greeter will display the name value passed as props from the parent component.  This component is display or dumb, it accepts a greeting in props, and displays it.

    ex. src/components/Greeter.js

    import React, { Component } from 'react'

    // Greeter is a dumb/display component that does not hold state
    class Greeter extends Component {
        render() {
            // We are passing the state object value as props called "name" <name={ this.state.name }> from the parent App.js
            return (
            <h1>Hello, { this.props.name }! </h1>
            )
        }
    }
    export default Greeter

    ex. Alternative Dumb Component -> written as functional component, not a Class Component.  Functional components don't need a render, just a return.

    import React from 'react'

    // Greeter is a dumb/display component that does not hold state
    const Greeter = (props) => {
        // We are passing the state object value as props called "name" <name={ this.state.name }> from the parent App.js
        return (
        <h1>Hello, { props.name }! </h1>
        )
    }
    export default Greeter

Step 3 ->
    - We want a way for our user to enter their name rather than having a hardcoded name in state.
    - We need a text input and a method that will update state as our user types in the input.

    ex. src/App.js
    import React, { Component } from 'react'
    // importing the Greeter component
    import Greeter from './components/Greeter'

    class App extends Component{
        constructor(props){
            super(props)
            // changing the state object to hold an empty string
            this.state = {
            name: ""
            }
        }

        handleChange = (event) => {
            // a method that will take the value from an input and save it in the state key "name"
            this.setState({ name: event.target.value })
        }

        render() {
            return (
            <div>
                {/* adding a JSX tag <input /> that will call the handleChange method and pass the value of the state object */}
                <input
                value={ this.state.name }
                onChange={ this.handleChange }
                />
                {/* same information being passed as props to <Greeter /> */}
                <Greeter
                name={ this.state.name }
                />
            </div>
            )
        }
    }
    export default App

    - The JSX input tag in the above example takes two attributes:
        - value of our state object
        - onChange that calls a method called handleChange that will collect the information entered in the input and update state
    - For the input, we need both a value and onChange because <input> has its own internal state, so we need to use the props value and onChange to pass the proper context into it.  The input is re-rendered every time the state of the component changes.
    - The information from the input is passed to the child Greeter component

Step 4 -> we can change the user output by adding a method in the Greeter component

    ex. src/components/Greeter.js

    import React, { Component } from 'react'

    class Greeter extends Component {
    // Greeter is a dumb/display component that does not hold state

        capitalizer = (userInput) => {
            // a display component can have its own methods that act on the information being passed as props
            return userInput.toUpperCase()
        }

        render() {
            return (
            // calling a method and passing the information from the input
            <h1>Hello, { this.capitalizer(this.props.name) }! </h1>
            )
        }
    }

    export default Greeter

    ex. Alternate Smart Component(passing methods to dumb components)
    import React, { Component } from 'react'
    // importing the Greeter component
    import Greeter from './components/Greeter'

    class App extends Component{
        constructor(props){
            super(props)
            // changing the state object to hold an empty string
            this.state = {
                name: ""
            }
        }

            handleChange = (event) => {
            // a method that will take the value from an input and save it in the state key "name"
            this.setState({ name: event.target.value })
        }

            capitalizer = (userInput) => {
                // a display component can have its own methods that act on the information being passed as props
                return userInput.toUpperCase()
        }

            render() {
                return (
                    <div>
                    {/* adding a JSX tag <input /> that will call the handleChange method and pass the value of the state object */}
                    <input
                        value={ this.state.name }
                        onChange={ this.handleChange }
                    />
                    {/* same information being passed as props to <Greeter /> */}
                    <Greeter
                        name={ this.state.name } capitalizer={this.capitalizer}
                    />
                    </div>
                )
        }
    }
    export default App

    ex. Alternate dumb component (using inherited methods)
    src/components/Greeter.js

    import React from 'react'

    const Greeter = (props) => {
    // Greeter is a dumb/display component that does not hold state

        return (
            // calling a method and passing the information from the input
            <h1>Hello, { props.capitalizer(props.name) }! </h1>
        )
    }

    export default Greeter

Step 5 - as our app grows, we'll likely want to move the <input /> into its own component

    ex.src/App.js

    import React, { Component } from 'react'
    // importing the Greeter component
    import Greeter from './components/Greeter'
    // importing the NameInput component that we are about to create
    import NameInput from './components/NameInput'

    class App extends Component{
        constructor(props){
            super(props)
            // state object stays the same
            this.state = {
            name: ""
            }
        }

        updateName = (name) => {
            // this method is passed as props to <NameInput /> so the value from the child component can be passed back "up river" to the parent App.js
            this.setState({ name: name })
        }

        render() {
            return (
            <div>
                {/* <Greeter /> gets the same information as props */}
                <Greeter
                name={ this.state.name }
                />
                {/* <NameInput /> gets the information from state and a method as props  */}
                <NameInput
                name={ this.state.name }
                updateName={ this.updateName }
                />
            </div>
            )
        }
    }

    export default App

Step 6 - let's create a new child component called NameInput and move the input into this component.  We need to refactor the value attribute and create a new handleChange method for this component

    ex. src/components/NameInput.js

    import React, { Component } from 'react'

    class NameInput extends Component {
    // NameInput is a dumb/display component that does not hold state

        handleChange = (event) => {
            // method that takes the value from the input and calls updateName
            this.props.updateName(event.target.value)
        }

        render() {
            // the JSX tag <input /> has the value of name coming as props from App.js
            return (
            <input
                value={ this.props.name }
                onChange={ this.handleChange }
            />
            )
        }
    }
    export default NameInput
