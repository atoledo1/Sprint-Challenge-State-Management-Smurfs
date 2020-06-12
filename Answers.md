1. What problem does the context API help solve?

It helps solve "prop drilling"; thanks to context Api, you don't have to pass props from component to component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions- Object with up to two properties: type and payload. Role: It's passed into the reducer function as an argument.

reducers- Pure functions that take in two arguments: current state and an action object. Role: Only place where state can be updated.

store - Object that contains the state. Role: Everything changable in the application is represented by the store, which is why it's known as "single source of truth".

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global while component state is limited to the component. With larger applications, it would be a good idea to use application state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It's a separate node package that allows us to make the flow asynchronous by intercepting the usual redux flow. It changes our action-creators by letting us make Api calls from them.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I think it would have to be redux because of how it's organized and how it really makes sense for building more complex applications.
