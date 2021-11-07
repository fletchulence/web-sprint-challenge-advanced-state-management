# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

      - Context API solves the 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. **What does each piece do**? Why is the **store** known as a 'single source of truth' in a redux application?

      - **Actions** are the underlying objects which dictate our app's behavior. We use actions to represent data being sent from the app to the store. Actions are triggered by the user and we use actions to dictate how our app should respond to the user's interaction (to change store state). dispatch(action) 
      - **Reducers** are pure funcitons which specify how our applications' actions should respond to a change in state initiated by the user. Reducers are only concerned with state, so we are careful about how we manipulate it.
      - **Store** is the applications single source of truth because it is responsible for creating the bridge between the actions and the reducers. Without our store keeping track of, (and updating) our objects' state, it would not work.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

      - Thunk allows us the ability to call functions with side-effects within our action-creators. Since actions and reducers are so involved, we usually have to be careful with what goes in and out (must be pure functions). Any side-effects will be wrapped in thunk (middleware) which will cause the effect, instead of our actions directly.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

      - 