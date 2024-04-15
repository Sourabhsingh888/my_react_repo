// Header.jsx

import React from 'react';
import ThemeContext from './ThemeContext';
// const ThemeContext = React.createContext();
function Header() {
    const { theme, setTheme } = React.useContext(ThemeContext);
    console.warn(ThemeContext)

    return (
        <header>
            <h1>Theme:{theme}</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</button>
        </header>
    );
}

export default Header;