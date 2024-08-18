import "./titlearea.css";
import React from 'react';

function TitleArea() {
    return (
        <div className="titleArea-box">
            <div className="titleArea-left">
                <p className="titleArea-header">Kishan Thakurani</p>
                <p className="titleArea-subheader">Student Developer</p>
            </div>
            <div className="titleArea-right">
                <p className="titleArea-text">I am a student developer who is passionate about learning new things and
                    building projects.</p>
                <a href="/Kishan%20Thakurani.pdf" download>
                    <button className="pushable">
                          <span className="front">
                            Download Resume (PDF)
                          </span>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default TitleArea;
