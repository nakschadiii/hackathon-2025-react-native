import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({

})

export const ThemeProvider = ({ children }) => {
    const [themeSelector, setThemeSelector] = useState("light");
    const themes = {
        light: {
            background: "gray-100",
            text: "black",
            primary: "lime-500",
            primaryDark: "lime-600",
            primaryText: "white",
            secondary: "red-400",
            accent: "blue-500",
        },
        dark: {
            primary: "blue-400",
            secondary: "red-400",
            accent: "green-400",
        }
    }
    return <ThemeContext.Provider value={{ ...themes[themeSelector] }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);