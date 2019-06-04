import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import gMapsBubbleLogo from "../../assets/GoogleMapsLogo.svg";
import webLogo from "../../assets/earth-globe.svg";

function Marker({ breweryName, breweryWebsite, onClick }) {
    return (
        <div class="speech-bubble" onClick={onClick}>
            <strong className="bubbleText">{breweryName}</strong>
            <Link to="/">
                <img className="gMapsBubbleLogo" src={gMapsBubbleLogo} />
            </Link>
            <a href={breweryWebsite} target="_blank">
                <img className="webBubbleLogo" src={webLogo} />
            </a>
        </div>
    );
}

export default Marker;
