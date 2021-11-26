import React from 'react';
import './desktopNavbar.css';
import { Link } from 'react-router-dom';

export default function DesktopNavbar() {
    return (
        <div>
        <div className="DesktopNavbar">
            <Link to="/">
                <div className="clickable">
                    Home
                </div>
            </Link>
            <div className="clickable predropdown">
                About Us
            </div>
            <Link to='/ourteam'>
                <div className="clickable">
                Services
                </div>
            </Link>
            <Link to="/gallery">
                <div className="clickable">
                    Gallery
                </div>
            </Link>
        </div>
        <div className="dropdown hidden"> 
                    <p> Our Team </p> 
                    <br/> 
                    <p> Our Services </p> 
                </div>
        </div>
    );

}

