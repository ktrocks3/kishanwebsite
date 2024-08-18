import React from 'react';
import './App.css';
import TopBar from './components/topbar.js';
import TitleArea from './components/titlearea.js';
import AboutMe from './components/aboutme.js';
import Skills from "./components/skills";
import PictureText from "./components/picturetext";
import Contact from "./components/getInTouch";



function App() {

    return (
        <div className="App">
            <div className="row">
                <TopBar/>
            </div>
            <div className="row">
                <TitleArea/>
            </div>
            <div className="row">
                <PictureText/>
            </div>
            <div className="row">
                <AboutMe/>
            </div>
            <div className="row">
                <Skills/>
            </div>
            <div className="row">
                <Contact/>
            </div>
        </div>
    );
}

export default App;
