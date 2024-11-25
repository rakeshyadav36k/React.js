import {createContext, useContext} from 'react'

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},     /// here initialize all the functionalities
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}