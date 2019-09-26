import React from "react";
import './Header.css';

function Header(props) {
    return (
        <div>
            <div className="header-div">
                <img id='band-image' src={props.image} alt='band logo' />
                <div id='band-text-div'>
                    <p id='band-name'>{props.name}</p>
                    <p id='upcoming-events'>Upcoming Events</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
