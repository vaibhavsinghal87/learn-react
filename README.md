# learn-react

React learning series

- React components are JavaScript functions that return markup
- React component names must always start with a capital letter, while HTML tags must be lowercase.
- JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper
- In React, you specify a CSS class with className. It works the same way as the HTML class attribute
- React does not prescribe how you add CSS files. In the simplest case, you’ll add a <link> tag to your HTML.
- JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.
- You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute
- In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code.
  - if condition in function
  - conditional ? operator
  - logical && syntax
- You will rely on JavaScript features like for loop and the array map() function to render lists of components.
- For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.
- Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.
- Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
- Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.

---

- If your JSON is well-structured, you’ll often find that it naturally maps to the component structure of your UI. That’s because UI and data models often have the same information architecture—that is, the same shape. Separate your UI into components, where each component matches one piece of your data model.
- The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity… yet! It’s often easier to build the static version first and add interactivity later. Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.
- Props are a way of passing data from parent to child.
- After identifying your app’s minimal state data, you need to identify which component is responsible for changing this state, or owns the state. Remember: React uses one-way data flow, passing data down the component hierarchy from parent to child component. It may not be immediately clear which component should own what state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component

---

- Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX!
- Keys let React keep track of each item’s place in the list even if the list changes
- By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows
- You can make this component pure by passing a prop instead of modifying a preexisting variable
- A React render tree is a representation of the parent and child relationship between components.
- Fragments let you group things without leaving any trace in the browser HTML tree.
- But what if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }:
- You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to your component! React component functions accept a single argument, a props object. Usually you don’t need the whole props object itself, so you destructure it into individual props.
- A component may receive different props over time. Props are not always static!. Props reflect a component’s data at any point in time, rather than only in the beginning.
- However, props are immutable—a term from computer science meaning “unchangeable”. When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.
- Don’t try to “change props”. When you need to respond to the user input (like changing the selected color), you will need to “set state”
- In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return null.
- In practice, returning null from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX.
- Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
- React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs

---

- Unlike regular JavaScript variables, React state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.
- Setting state requests a new re-render, but does not change it in the already running code.
- State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects and arrays that you hold in the React state directly. Instead, when you want to update an object and array, you need to create a new one (or make a copy of an existing one), and then update the state to use that copy.
- Arrays are another type of mutable JavaScript objects you can store in state and should treat as read-only. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array
- To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag.
- Often you’ll want the parent component to specify a child’s event handler. Consider buttons: depending on where you’re using a Button component, you might want to execute a different function
- Event handlers will also catch events from any children your component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.
- When React renders a component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
- Hooks are special functions that are only available while React is rendering (which we’ll get into in more detail on the next page). They let you “hook into” different React features.
- You can have as many state variables of as many types as you like in one component.
- State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.
- Unlike props, state is fully private to the component declaring it. The parent component can’t change it. This lets you add state to any component or remove it without impacting the rest of the components.

---

- For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
  For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
- React only changes the DOM nodes if there’s a difference between renders.
- State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.
- “Rendering” means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render.
- As a component’s memory, state is not like a regular variable that disappears after your function returns. State actually “lives” in React itself—as if on a shelf!—outside of your function. When React calls your component, it gives you a snapshot of the state for that particular render. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!
- A state variable’s value never changes within a render, even if its event handler’s code is asynchronous.
- React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry whether the state has changed while the code is running.
- Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.
- React waits until all code in the event handlers has run before processing your state updates.
- This lets you update multiple state variables—even from multiple components—without triggering too many re-renders. But this also means that the UI won’t be updated until after your event handler, and any code in it, completes. This behavior, also known as batching, makes your React app run much faster. It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.
- React does not batch across multiple intentional events like clicks—each click is handled separately.
- State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy. In other words, you should treat any JavaScript object that you put into state as read-only.

---

- Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

---

- Context lets the parent component make some information available to any component in the tree below it—no matter how deep it is—without passing it explicitly through props.

- Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.
  With this approach, a parent component with complex state manages it with a reducer. Other components anywhere deep in the tree can read its state via context. They can also dispatch actions to update that state.

- React preserves a component’s state for as long as it’s being rendered at its position in the UI tree. If it gets removed, or a different component gets rendered at the same position, React discards its state.

- As a rule of thumb, if you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another. If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree.

---

- When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref. Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!

- A ref is like a secret pocket of your component that React doesn’t track. For example, you can use refs to store timeout IDs, DOM elements, and other objects that don’t impact the component’s rendering output.

- You can pass refs from parent component to child components just like any other prop.

- Unlike event handlers, which let you handle particular events, Effects let you run some code after rendering.

- Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.

- Effects have a different lifecycle from components. Components may mount, update, or unmount. An Effect can only do two things: to start synchronizing something, and later to stop synchronizing it. This cycle can happen multiple times if your Effect depends on props and state that change over time.

- Code inside Effect Events isn’t reactive, so changing the theme no longer makes your Effect re-connect.

---

- fill form with data from server - controlled vs uncontrolled forms
- use react component library
- add/delete app - todos app
- search app, filtering app
- interaction app between page elements
- how components interact app
- state management app
- reset state examples - like cascading dropdowns, related to different component. how to reset one component state based on action in anoother component
- click to show sections and hide other sections, similar to tabgroup, use a container Card to render different components dynamically. This can also be achieved using url.
- component interaction guidelines, scenarios, rules
- understand virtual DOM
- context vs prop - performance, use cases
- Effects and cleanup functions
- DOM manipulatoins allowed in react ?
- when a component is removed from DOM wha happens to its variables and state. Does react automatically clean them up OR some cleanup is required?
- react component code organization patterns

---

## When React triggers DOM updates -

## React Perf Checklist -

---

## Rules of React -

- Use `props` to pass data from `Parent to child`. Similar to @Input in Angular
- `Props` can be used to pass values, object, functions and even JSX
- `Props` serve same role as arguments serve for function
- `Props` can also be assined default values
- `Props` are not static. They change over time
- Child should not alter parent `props`
- children prop is similar to ng-content in Angular. You will often use the children prop for visual wrappers: panels, grids, etc.
- React uses one way data flow
- React component is a JavaScript function that you can sprinkle with markup.
- Functions can be called from inside JSX as component is not called again and again.
- Acomponent can return null if u dont want to render anything. This is not a good practice
- Best practices for rendering HTML/markup if there are a lot of conditions in JSX?
- JSX elements directly inside a map() call always need keys!
- Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree. Rather than generating keys on the fly, you should include them in your data
- Keys-
  - Dont use array index as keys
  - Keys must not change. Dont generate keys while rendering
  - Keys are not passed as props to component
  - Keys must be unique among siblings
- React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs
- Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!
- Components can also be rendered conditionally based on javascript condition. There is no ngIf alike in React
- Setting state requests a new re-render, but does not change it in the already running code.
- Always use a updater function when setting state
- Patterns to move state out of a component - Does Tanstack provides anything for same
- Hooks can be called at the top level only. Cant be called inside any function
- State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.
- Parent component can't change `state` of a child
- If any component updates state React triggers a re-render for that component only. This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.
- React only changes the DOM nodes if there’s a difference between renders.
- React does not touch the DOM if the rendering result is the same as last time
- Use StrictMode
- State seters can be passed as props to child component
- A state variable’s value never changes within a render, even if its event handler’s code is asynchronous.
- CRUD app
- Component creation guidelines and best practices for creating React components and data sharing betwene them. Check eslint rules also
- How to share state with distant components to avid prop drilling - Use Context
- State update logics to be extracted in a reducer
- Controlled vs Uncontrolled components
- State gets destroyed when a component gets destroyed
- Task App
- useState and useReducer are equivalent
- You don’t have to use reducers for everything: feel free to mix and match! You can even useState and useReducer in the same component.
- How to access DOM in React - useRef
- useRef is similar to ViewChild
- useImperativeHandle
- caching API calls, when components revisited
- passing data from one page to another - can we use route data like in angular