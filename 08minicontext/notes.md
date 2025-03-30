`Context API`
The Context API is a feature in React that allows you to share state (data) across multiple components without having to pass props manually at every level (also known as "prop drilling"). It’s a built-in solution for managing global state in your React application.

Normally, in React, you pass data from a parent component to child components using props. But when multiple components need the same data, passing props through every level can become difficult. Context API helps solve this by providing a global state that any component can access.

---

State management in React refers to handling and updating the data (state) of your application efficiently so that your UI stays in sync with it. In a React app, state can exist at different levels:

Local State – Managed within a single component (using useState).

Global State – Shared across multiple components (using Context API, Redux, etc.).

Server State – Data fetched from an API and kept in sync (React Query, SWR).

URL State – Data stored in the URL (React Router)

---

A global state is a piece of data that is shared across multiple components in a React application. Unlike local state, which is confined to a single component, global state allows different parts of the app to access and update shared data without prop drilling (passing props manually through multiple components).

---

The createContext function in React is used to create a global state that can be accessed by multiple components without prop drilling (passing props through multiple levels). It is mainly used with the Context API.

context will give us a major thing called provider,this context is providing us a variable
every context is a provider
usercontext is a provider
we use usercontext as a wrapper we can use it like div to wrap components and all the components inside the wrapper will get access to the globalusercontext

---

children is a generic name which means whatever is coming just move it ahead as it is

---

`useState`
useState is a React Hook that allows functional components to manage state. It helps store data that can change over time and re-render the component when updated.

---

      //any component inside this UserContextProvider tag would have access to the global state
