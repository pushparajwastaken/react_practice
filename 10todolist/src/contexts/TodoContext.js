import { createContext, useContext } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = TodoContext.Provider;

// custom hook for consuming context
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used inside a TodoContextProvider");
  }
  return context;
};
