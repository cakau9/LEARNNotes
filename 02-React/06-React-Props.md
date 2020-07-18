- Props (properties) is a keyword in React for passing information from one component to another
- Props are passed in one direction only, from parent to child
- Props cannot be updated, they are "read only"

Vocab
- props - short for properties, keyword in React for passing information from one component to another.  It is "read only", so cannot be updated.  It gives us the ability to pass data down to nested components. We can pass information as props and also behavior.
- component call - how information gets passed from the parent component to the child component.  Very similar to how a function gets passed information through an argument.

Communication Between Components
- Communication between components is very important since React is component based.  
    - Nested components gave us the ability to build modular interfaces and state gave us a way to track and update within components, props give us the ability to communicate by passing data and methods between components.  It gives us the ability to pass data down to nested components.
- Props are a snapshot of state that are passed on to components tasked with displaying and/or letting a user interact with that information.
- A component call is very similar to how a function gets passed information through an argument.  It is how information gets passed from teh parent component to the child component.

    ex. src/App.js

    import React, { Component } from 'react'
    import GreetPerson from './components/GreetPerson'

    class App extends Component{
        render(){
            return(
            <div>
                <GreetPerson name="Bob" />
            </div>
            )
        }
    }
    export default App

    ex. src/components/GreetPerson.js
    - Note that we use this.props.name with this because it is a Class Component.  If it was a functional component, can use just props.name

    import React, { Component } from 'react'

    class GreetPerson extends Component{
        render(){
            return(
            <h1>Hi, { this.props.name }!</h1>
            )
        }
    }
    export default GreetPerson

Passing A Value From State As Props

- Instead of hardcoding "Bob" directly in the component call, we can use the state object to pass props to the child component.

    ex.src/App.js

    import React, { Component } from 'react'
    import GreetPerson from './components/GreetPerson'

    class App extends Component{
        constructor(props){
            super(props)
            this.state = {
            personOne: "Bob",
            personTwo: "Teddy"
            }
        }
        render(){
            return(
            <div>
                <GreetPerson name={ this.state.personOne } />
                <GreetPerson name={ this.state.personTwo } />
            </div>
            )
        }
    }

    export default App

    - The variable name is assigned information from state.  name is also available to GreetPerson as props.  The component GreetPerson is being called twice, each with different information from the state object.
    - We are reusing a component to display different sets of information.  Using props and components can make for an extremely dynamic application.

    ex.src/components/GreetPerson.js

    import React, { Component } from 'react'

    class GreetPerson extends Component{
        render(){
            return(
            <h1>Hi, { this.props.name }!</h1>
            )
        }
    }
    export default GreetPerson

    - Nothing has really changed in the Greet Person component, bu three important things happened in App.js when we passed a value from state as props:
        1) We added state to the App component by setting up a constructor with two values in state
        2) We changed the hardcoded names to reference the items in state
        3) We've centralized our data and made them available to any other components in the App component.

Refactor: Mapping a Component Call
- A little refactoring to make it even more dynamic

    ex. src/App.js

    import React, { Component } from 'react'
    import GreetPerson from './components/GreetPerson'

    class App extends Component{
        constructor(props){
            super(props)
            this.state = {
            people: [
                "Bob",
                "Teddy"
            ]
            }
        }
        render(){
            return(
            <div>
                this.state.people.map(person => <GreetPerson name={ person } />
            </div>
            )
        }
    }
    export default GreetPerson

    - The refactor includes making an array of names in the state object (notice the []s)
    - To render the components, we can use map() to iterate over the names of the people array and return a GreetPerson component for each name.  As we add things to state, the component updates without anymore code.

Passing a Method as Props
We explored passing information as props, but we can pass behavior as well and the process to do this is very similar.  
    ex. src/App.js -> We can create a button that when clicked, will greet different people from our array.  To do this, we can pass both the state object and a method to our child component

    import React, { Component } from 'react'
    import GreetPerson from './GreetPerson'

    class App extends Component{
        constructor(props){
            super(props)
            this.state = {
            people: [
                "Bob",
                "Teddy",
                "Joe"
            ],
            currentPerson: 0
            }
        }
        handleGreeting = () => {
            let nextPerson = Math.floor(Math.random() * this.state.people.length)
            this.setState({ currentPerson: nextPerson })
        }

        render(){
            return(
            <GreetPerson
                person={ this.state.people[this.state.currentPerson] }
                greeting={ this.handleGreeting }
            />
            )
        }
    }
    export default App

    - Now we are passing both data and behavior to our child component GreetPerson:
        1) Data - the component has access to this.state.people as this.props.people through the variable person.
        2) Behavior - the component has access to handleGreeting as this.props.greeting through the variable greeting
    
    ex. src/components/GreetPerson.js

    import React, { Component } from 'react'

    class GreetPerson extends Component{
        render(){
            return(
            <div>
                <h1>Hello, { this.props.person }!</h1>
                <button onClick={ this.props.greeting }>Greet Next Person</button>
            </div>
            )
        }
    }

    export default GreetPerson

    - The button in GreetPerson is responsible for calling the method in our parent component.  If we wanted to add more names in our application, the only thing we would have to modify is the number of items in our array.  The rest of the application is dynamic.
