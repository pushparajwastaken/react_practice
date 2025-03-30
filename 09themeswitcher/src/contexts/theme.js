import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => console.warn("darkTheme function not initialized"),
  lightTheme: () => console.warn("lightTheme function not initialized"),
});

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
