
import { defaultContext } from "./Context";
import {  createContext, useContext, useState } from "react";


export const MoodContext = createContext(defaultContext);
export const MoodContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
    const toggleTheme = () => setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    const [language, setLanguage] = useState( JSON.parse(localStorage.getItem('language')));
    const toggleLanguage = (event) => setLanguage(event.target.value);

    return (
        <MoodContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
            {children}
        </MoodContext.Provider>
    );
};
export const useMood=()=>useContext(MoodContext);
