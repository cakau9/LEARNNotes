React state is an object managed within a component.  Methods in the program can update the value of the state object and therefore change what appears in the browser.

Vocab
- constructor -
- dumb/pure/display component -
- smart/impure/logic component -
- state - an object that stores a component's dynamic data and determines how the component renders and behaves
- setState() - JavaScript method used to change the value of state.

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
