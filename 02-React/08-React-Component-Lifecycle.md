The render() method is a built-in method in React class components that:
    1) Determines what is drawn or rendered onto the screen
    2) Runs automatically at certain times by React
How and when does React know to run the render() method?

- Lifecycle Methods - render() is one of several built-in methods that organize React functionality so that, as dynamic as our components are, they still behave in a predictable manner.

The Big Picture
The lifecycles break down into 3 main phases:
    1) Mounting - when a component is put into the DOM
        - Includes constructor() and render method()
            - Falls under the "Render Phase" umbrella, meaning it is pure and has no side effects and may be paused, aborted, or restarted by React.
        - "Commit Phase" follows the "Render Phase" and can work with DOM, run side effects, and schedule updates.  The method that falls under this is componentDidMount()
    2) Updating - when something in the component is updated (ie state)
        - Includes the render() method which takes in New props, setState(), and forceUpdate()
            - Falls under the "Render Phase" umbrella, meaning it is pure and has no side effects and may be paused, aborted, or restarted by React
        - "Commit Phase" follows the "Render Phase" and can work with DOM, run side effects, schedule updates.  The method that falls under this is componentDidUpdate()
    3) Unmounting - when a component is removed from the DOM
        - Falls under the "Commit Phase" only and contanes the componentWillUnmount() method.

- We will spend most of our time working with the first 2.

The Phases in Action
    ex. Simple Button app, console.log to indicate when it runs

    import React, { Component } from 'react';

    class Button extends Component {
        render(){
            console.log('=========RENDERING==========')
            return(
            <button>I am  a button</button>
            )
        }
    }

    export default Button;

    - Upon inspection, we can see the log statement indicating that the render() ran.
    - Another lifecycle method we use a lot is the constructor() method.  It runs before the render() method in the mounting phase fo our React components.
    - Let's add a clicked state to a button and log it to see when it runs.

    ex. Constructor

        constructor(props){
            console.log("BEGIN MOUNT")
            console.log("=======CONSTRUCTING=======")
            super(props)
            this.state = {
                clicked: false
        }
        console.log("CONSTRUCTED WITH: ", this.state)
    }

    - When checking the browser, we can see our 'BEGIN MOUNT', 'CONSTRUCTING', and 'CONSTRUCTED WITH' logs ran before our 'RENDERING' log.  
    - Add the componentDidMount() lifecycle method

    ex. componentDidMount

        //...component code
        componentDidMount(){
            console.log("END MOUNT")
        }
    
    - We can see the beginning and end of the mount phase.  It encapsulates a call to the constructor (), the render (), and componentDidMount().

    - setState() is one of the ways that an update phase is triggered.  Let's add an onClick() that triggers a state change.

    ex. Final Button component code

    import React, { Component } from 'react'

    class Button extends Component {
        constructor(props){
            console.log("BEGIN MOUNT")
            console.log("=======CONSTRUCTING=======")
            super(props)
            this.state = {
            clicked: false
            }
            this.handleClick = this.handleClick.bind(this)
            console.log("CONSTRUCTED WITH: ", this.state)
        }

        handleClick(){
            console.log("++++++UPDATING++++++");
            console.log("State changing: ", this.state)
            let { clicked } = this.state

            clicked = clicked === false ? true : false
            this.setState({clicked: clicked})
        }


        render(){
            console.log('=========RENDERING==========')
            return(
            <button onClick={this.handleClick}>I am a button</button>
            )
        }

        componentDidMount(){
            console.log("END MOUNT")
        }
    }

    export default Button

    - What is handleClick doing?
        1) We've superficially indicated that handleClick() is triggering the update phase and that it is attempting to change state
        2) After every click and 'UPDATING' marker, we see the 'RENDERING' marker.  The diagram indicates that setState() triggers and retriggers the render() method.


        

