React is a JavaScript library for building user interfaces.  React is used to build web pages, mobile web pages, and native mobile apps.  It is component based (what makes React very powerful), which means we use it to build many small parts and then join them together to form entire applications.  Turns out React makes apps very scalable.  Was created by FaceBook.
    - Documentaion is VERY IMPORTANT and well done, make sure to have this always bookmarked

Components can manage their own state, encapsulation is powerful.  
     - The "like" button doesn't refresh the entire page, but you can see that it changed.  The "like" button is its own component.
Components are very similar to functions because they are reusable, encapsulated and return something.  Smart components hold all of the logic and dumb components hold all the user interface elements.  
    - Similar to how we pass arguments into functions, in components we pass props from smart components down river to dumb components.  
   
React creates a virtual DOM -> A DOM (Document Object Model) connects programming language by getting feedback from the user and manipulating the DOM to browser (the interface/ui).  All built-in methods act on objects and is a class of and in itself.  

We have DOM we see and there's a layer behind this we can't see.  The Virtual DOM processes the change.  It pinpoints individual nodes and looks for changes on these nodes.  Can update little things without page refreshes.

React is an SPA (single page application) -> collection of components that are on a single page.  
    - Uses JSX (JavaScript XML) -> looks like HTML, but written in JavaScript.

render() method -> the return is in it.  Renders are a must in Class Components
    ex. render(){
            return ()
    }
    