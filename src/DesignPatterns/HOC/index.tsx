//Higher Order Component (HOC) in React
//https://www.freecodecamp.org/news/higher-order-components-in-react/


//______BenefitsHOC in React
/*
In React, a higher-order component is a function that takes a component
as an argument and returns a new component that wraps the original component.
*/


//______Benefits of Using Higher-Order Components in React
/*
1. Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.

2. Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC.
This makes them a flexible way to add functionality to your components.

3. Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component.
This can make the code easier to read and maintain.

4. Composition: HOCs can be composed together to create more complex functionality.
This allows you to build up functionality from smaller, reusable pieces.

5. Higher-order components can be used to implement cross-cutting concerns in your application such as authentication,
error handling, logging, performance tracking, and many other features.
*/


//______BenefitsHigher-Order Component Structure
/*
1. define the HOC function. This is a function that takes a component as input and 
returns a new component with additional functionality.

2. Then you define the new component. This is a class component that wraps the WrappedComponent and adds additional functionality.

3. Next, you pass props to the WrappedComponent. 
In the render() method of the NewComponent, 
pass all the props (including the additional props added by the HOC) to the WrappedComponent.

4. Finally, return the new component. The HOC function should return the NewComponent so it can be used in the application.

*/

const hoc = (WrappedComponent : () => React.ReactNode) => {
    class NewComponent extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
    return NewComponent;
  }


//______When to Use HOCs in your React Code
/*
1. Authentication: Suppose you have an application with various routes, 
some of which require the user to be authenticated before accessing them.

2. Logging: Imagine you want to log some data every time a specific set of components mount or update. 
Rather than adding the logging logic to each component, you can create an HOC called withLogger that handles the logging functionality. 
By wrapping the relevant components with withLogger, you can achieve consistent logging across those components.

3. Styling and Theming: You might have a design system with reusable styles and themes. 
You can create an HOC named withTheme that provides the necessary theme-related props to a component.
*/