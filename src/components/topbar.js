import React from 'react';
import './topbar.css';
import ToggleDark from "./ToggleDark";
import {ThemeContext, themes} from "./ThemeContext";

function TopBar() {
    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <div className="topBar-container">
            <h2 className={"topBar-header"}> Kishan.T </h2>
            <ThemeContext.Consumer className={"darkToggle"}>
                {({changeTheme}) => (
                    <ToggleDark
                        toggleDark={() => {
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                        }}
                    />
                )}
            </ThemeContext.Consumer>
        </div>);
}

export default TopBar;
