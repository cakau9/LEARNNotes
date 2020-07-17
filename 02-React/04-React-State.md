React state is an object managed within a component.  Methods in the program can update the value of the state object and therefore change what appears in the browser.

Vocab
- constructor - a special method that is used to initialize a newly created object and is called just after the memory is allocated for the object.
- dumb/pure/display component - component that doesn't hold state
- smart/impure/logic component - component that holds state
- state - an object that stores a component's dynamic data and determines how the component renders and behaves
- setState() - JavaScript method used to change the value of state.  Never manipulate this.state directly.  The React DOM will re-render every time you call setState and update the component.

Set Up
- $ yarn create react-app app-name
- $ cd app-name
- Open the application in a text editor
- Delete all the boilerplate code
- $ yarn start

State
Everything in React is a component.  Components can be broken down into two categories:
    - Components that hold state
    - Components that do not hold state
State is an object that stores a component's dynamic data and determines how the component renders and behaves.
    - To make a component dynamic, the value of state must often be changed by the application.  
    - To change the value of state, we use a JS method called setState().  You should never manipulate this.state directly.  The React DOM will re-render every time you call setState and update the component.

    ex. Counter Example
        src/App.js
            
            import React, { Component } from 'react'
            import Counter from './Counter'

            class App extends Component {
                render() {
                    return (
                    <Counter />
                    )
                }
            }

            export default App
        
        - Imported a component called Counter.  Here is src/Counter.js:

            import React, { Component } from 'react'
                class Counter extends Component {
                    constructor(props){
                        super(props)
                        this.state = {
                        count: 0
                        }
                    }

                    render() {
                        return (
                        <div>
                            <h2>Counter: { this.state.count }</h2>
                        </div>
                        )
                    }
                }

            export default Counter

        - Notice, there is a constructor and we are passing props into it.  We also have super and are passing props into this.  
        - The state object is called with this.state and set equal to an object with one key:value pair (key is count, value is 0)
        - Can simplify Counter.js with some object destructuring so we don't need { this.state.count }

            import React, { Component } from 'react'

                class Counter extends Component {
                    constructor(props){
                        super(props)
                        this.state = {
                        count: 0
                        }
                    }

                    render() {
                        let { count } = this.state

                        return (
                        <div>
                            <h2>Counter: { count }</h2>
                        </div>
                        )
                    }
                }

                export default Counter

        - Render section, we destructured the count out of the state object by setting the count equal to this.state and then use the new variable count in the return.
        - Will increase the value of the counter by one, per click.  The button will have an onClick that calls a method called handleChange

              import React, { Component } from 'react'

                class Counter extends Component {
                    constructor(props){
                        super(props)
                        this.state = {
                        count: 0
                        }
                    }

                    handleChange = () => {
                        let newCount = this.state.count + 1
                        this.setState({ count: newCount })
                    }

                    render() {
                        let { count } = this.state

                        return (
                            <div>
                                <h2>Counter: { count }</h2>
                                <button onClick = { this.handleChange }> Press Me! </button>
                            </div>
                        )
                    }
                }
                export default Counter
        
        - The handleChange function takes this.state.count and adds one to the value then saves the new value in a variable called newCount.  By calling this.setState() and setting the state object key count to our newCount variable.
        - We can add Counter several times in App.js and we will have 3 buttons that will increment by 1, operating separately from each other.