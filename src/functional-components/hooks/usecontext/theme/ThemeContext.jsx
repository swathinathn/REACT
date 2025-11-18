import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [darkMode,setDarkMode] = useState(false);

    const toggleTheme = ()=> setDarkMode(!darkMode);

    return(
        <ThemeContext.Provider value={{darkMode,toggleTheme}}>
            <div
            style={{background: darkMode?"#000000ff":"#fff",
                color:darkMode?"#fff":"#da1111ff",
                minHeight:'100vh',
                padding:'1rem'

            }}>
                {children}

            </div>

        </ThemeContext.Provider>
    )

}