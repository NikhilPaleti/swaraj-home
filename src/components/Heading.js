import React from 'react';
import './heading.css';
import logo from '../assets/swaraj_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Heading() {
    return (
        <div className = "heading">
            <div className="leftHead">
                <img className="swarajLogo" src={logo} />
            </div>
            <div className="rightHead">
                <FontAwesomeIcon icon={ faPhone } className="faIcons" />
                +91 96256 72054

                <FontAwesomeIcon icon={ faEnvelope } className="faIcons" />
                swarajhydroponics@gmail.com
            </div>
        </div>
    )
}
