import React from 'react';
import {useState} from 'react';

const themes = {
    light:{
        color:'#000000', 
        backgroundColor: '#ff0000'
    },

    dark:{
        color: '#ffffff',
        backgroundColor: '#222222'
    }
};

export const ThemeContext = React.createContext(themes.light);

export function ThemeProvider(props) {
    const [theme, setTheme] = useState(themes.light);

    const changeTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

// export default ThemeProvider;