// main file
import React from 'react';
import ThemeContext from './ThemeContext';
import Header from "./Header";
import Content from "./Content";
function Main() {
    const [theme, setTheme] = React.useState('light');

    return (
      // Providing the theme value to the context
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* <div className={theme}> */}
        <div>
          <Header />
          <Content />
        </div>
      </ThemeContext.Provider>
    );
}

export default Main;