import React from 'react';
import './getInTouch.css'
import ContactCircle from "./contact-circle";

function Contact() {
    return (<div style={{width:'100%'}}>
        <p className="section-title">Get In Touch</p>
        <div className={"contactContainer"}>
            <div className={"contactLeft"}>
                <p className={"bigScreen"}>I am thrilled to connect with you! I eagerly await your contact through any of the methods conveniently provided on the right-hand side.</p>
                <p className={"smallScreen"}>I am thrilled to connect with you! I eagerly await your contact through any of the methods conveniently provided below</p>
                <p> Feel free to email me at: <a href="mailto:kishan@kishant.nl" className={"link"}>kishan@kishant.nl</a> or <a href="mailto:kishanthakurani2003@gmail.com" className={"link"}>kishanthakurani2003@gmail.com</a> </p>
                <p> You can also call me at: <a href="tel:+31616230976" className={"link"}>+31 6 16230976</a> </p>
            </div>
            <div className={"contactRight"}>
                <ContactCircle/>
            </div>
        </div>


    </div>);
}

export default Contact;