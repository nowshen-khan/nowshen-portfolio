import { createContext } from "react";

// Default value (light theme)
export const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
});
