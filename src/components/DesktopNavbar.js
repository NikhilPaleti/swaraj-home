import React from 'react';
import './desktopNavbar.css';

export default function DesktopNavbar() {
    return (
        <div className="DesktopNavbar">
            <div className="clickable">
                Home
            </div>
            <div className="clickable">
                About Us
            </div>
            <div className="clickable">
               Services
            </div>
            <div className="clickable">
                Gallery
            </div>
        </div>
    )
}
