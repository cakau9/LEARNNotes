React components are independent and reusable pieces of code.  Class components serve a similar purpose as functions, but work in isolation and return JSX via a render function.

Vocab
- React - a JavaScript library for building user interfaces.  It is component based, meaning it's made up of small parts and join them together to form applications.  It creates a virtual DOM.
- Class Component - serve a similar purpose as functions but work in isolation and return JSX via a render function.  They manage their own state, are encapsulated and reusable.
- render - only works in smart, class components and is doing the rendering of our JSX to display the code
- return - similar to built in JS function.  It is returning the content inside the parantheses.
- component call - calling another component in the main component.
- JSX - JavaScript flavored HTML that behaves almost like HTML, but uses the syntax className rahter than HTML's class.  They are the building blocks of React Components.

JSX is a syntax extension to JavaScript.  It is JavaScript flavored HTML that behaves almost like HTML with a couple of small exceptions.  
    - Uses the syntax className rahter than HTHML's class because class is reserved for HTML
    - They are the building block of React Components.

Nested Components -> allows us to call a component within the return of another component. In React when working with smart components, we need the JSX to live inside a single tag, which goes inside the return (), which lives inside the render() {} curly braces.
    - render() class method -> only works in smart, class components and is doing the rendering of our JSX to display the code that will bembetween the empty divs
    - return -> similar to the built in JS function.  It is returning the content inside the parantheses.  
        ex. class App extends React.Component {
                render (){
                    return (
                        <div></div>
                    )
                }
            }

Defining another component class called Content:
    ex. 
        <script type="text/babel">
            class App extends React.Component{
                render(){
                    return(
                        <div></div>
                    )
                }
            }
            class Content extends React.Component{
                render(){
                    return(
                        <div>
                        <h1>Title</h1>
                        <p>
                            This is app content.
                        </p>
                        </div>
                    )
                }
            }
            const domContainer = document.querySelector('#react-container')
            ReactDOM.render(<App />, domContainer)
        </script>

Calling the Content Component within the main component, which in this case is the App Component:
    ex.
        <script type="text/babel">
            class App extends React.Component{
                render(){
                    return(
                    <div>
                        <Content />
                    </div>
                    )
                }
            }
            class Content extends React.Component{
                render(){
                    return(
                    <div>
                        <h1>Title</h1>
                        <p>
                        This is app content.
                        </p>
                    </div>
                    )
                }
            }
            const domContainer = document.querySelector('#react-container');
            ReactDOM.render(<App />, domContainer)
        </script>

With the call to the Content Component inside the App Component's render, we now have nested components.  This pattern allows us to start building more complex applications.