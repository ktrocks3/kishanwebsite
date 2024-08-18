import React from 'react';
import './contact-circle.css';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
// import { Link } from "react-router-dom";

function ContactCircle() {
    return (
        <div className="main">
            <div className="up">
                <a href="tel:+31616230976">
                    <button className="card1">
                        <FontAwesomeIcon className={'phone'} icon={faPhone} size={'2x'}/>
                    </button>
                </a>
                <a href="mailto:kishan@kishant.nl">
                    <button className="card2">
                        <FontAwesomeIcon className={'email'} icon={faEnvelope} size={'2x'}
                                         onClick={() => {navigator.clipboard.writeText("kishan@kishant.nl")}}
                        />
                    </button>
                </a>




            </div>
            <div className="down">
                <button className="card3" onClick={() => {
                    window.open('https://www.linkedin.com/in/kishan-thakurani-78744b252', '_blank');
                }}>
                    <FontAwesomeIcon className={'linkedin'} icon={faLinkedin} size={'2x'}/>
                </button>
                <button className="card4" onClick={() => {
                    window.open('https://discord.com/users/251107491952197632', '_blank');
                }}>
                    <FontAwesomeIcon className={'discord'} icon={faDiscord} size={'2x'}/>
                </button>
            </div>
        </div>
    );
}

export default ContactCircle;
