Vocab
- import - Import React is a necessary step when creating a new component and importing the component into App.js is also important so the component can be called in the return.
- export - Export the component is an important step when creating a new component. Without this, you wouldn't be able to import it in App.js .

Useful Commands
- $ yarn create react-app app-name
- $ yarn start
- control-c

Creating a New React Application
The command yarn create-react app followed by the name of your application creates a new React application.  This command will only accept names that are lower case.  If a multiple word is descired, separate the words with a dash.   This-is-called-kabob-case.
    ex. $ yarn create react-app sample-app
This creates a directory called 'sample-app' and installs all the files and dependencies needed to get started.  Navigate into the new directory and fire up your new app.
    ex. $ cd sample-app
        $ yarn start
yarn start will automatically open a browser to the address localhost:3000 and redner the starter React application.  After you do yarn start, you will notice your terminal is buys running React.  If you want to interact with your terminal you can open a new tap command-t .  To stop the React app from running, use control c.

Modifying The App Component
Navigate to App.js within the src directory.  Get rid of boiler plate code and change to a basic class component that looks like this:

    // We're using React and Component from the react library
    import React, { Component } from 'react'

    // The main css file is called App.css, it is imported to App.js here
    import './App.css'

    // We create a new component that extends the Component class, which React provides
    class App extends Component {

    // When the component is first put on the page, and every time something changes in our component, the render function is called
    // This function builds the JSX that will be put on the page by React
        render() {

            // Most of the React apps use something called JSX to preprocess HTML (XML actually) back into plain old JavaScript before the file is sent to the browser
            return (
            <div className="App">
                // Why 'className' instead of 'class'?  It was a design decision on the part of the React development team
                <h2>Welcome to React</h2>
            </div>
            )
        }
    }

    // Every component must be exported
    export default App

    Nesting Components
    We will create a few new components in the src folder.  It is convention to name the file the same name as the class component in that file

    For reach new component, there are three ncessary steps:
        - Import React and the component module
        - Create the component defintion
        - Export the component
    
        ex. src/Header.js
            import React, { Component } from 'react'

            class Header extends Component{
                render(){
                    return(
                    <div>
                        <h1>This is a Header</h1>
                    </div>
                    )
                }
            }
            export default Header

        ex. src/Recipes.js
            import React, { Component } from 'react'

            class Recipes extends Component{
                render(){
                    return(
                    <ul>
                        <li>Recipe 1</li>
                        <li>Recipe 2</li>
                    </ul>
                    )
                }
            }
            export default Recipes
        
        ex. src/Footer.js
            import React, { Component } from 'react'

            class Footer extends Component{
                render() {
                    return (
                    <footer>
                        LEARN Academy
                        <br />
                        Alpha 2020
                    </footer>
                    )
                }
            }
            export default Footer 
    
    With the component defined, we can then call it in the App component.  This requires two steps:
        - Importing the component
        - Calling the component in the return


        ex. src/App.js
        import React, { Component } from 'react'
        import Header from './Header'
        import Recipes from './Recipes'
        import Footer from './Footer'

        class App extends Component {
            render() {
                return (
                <>
                    <Header />
                    <Recipes />
                    <Footer />
                </>
                )
            }
        }
        export default App

Class App will be everything on the page, so you want it to have all the other components.

Instead of <div> tags, use React Fragments (<React.Fragment>,</React.Fragment>,<>, </>) because the React Fragment doesn't add additional div tag when the page is inspected.