import React from 'react';
import './ToggleDark.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export default function ToggleDark(props) {
    return (
        <div>
            <input
                type="checkbox"
                className="checkbox"
                id="chk"
                onClick={() => {
                    props.toggleDark();
                }}
            />
            <label className="label" htmlFor="chk">
                <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                <div className="ball"></div>
            </label>
        </div>
    );
}