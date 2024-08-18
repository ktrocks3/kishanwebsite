import React from 'react';
import './picturetext.css';

function PictureText() {
    return (
        <div className={"pictureWrapper"}>

            <img className="mePicture"
                 src="/Kishan.jpg"
                 alt="Kishan Thakurani"
            />
            <div className="mePicture-text">
                <p className="mePicture-text">
                    My name is Kishan Naresh Thakurani. I hail from Curaçao and India, and I recently graduated with distinction (Cum Laude) in Technical Computer Science from the University of Twente in Enschede, Netherlands. With three years of hands-on experience across various programming languages, including a programming internship, I have developed a strong foundation in the field. Currently, I am pursuing a Master’s degree in Computer Science at the Technical University of Eindhoven.
                </p>
            </div>
        </div>
    );

}

export default PictureText;