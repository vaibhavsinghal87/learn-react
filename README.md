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
- 

