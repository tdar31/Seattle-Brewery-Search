import React from "react";
import "./style.css";
import gMapsBubbleLogo from "../../assets/GoogleMapsLogo.svg";
import webLogo from "../../assets/earth-globe.svg";

function Marker({ breweryName, breweryWebsite, breweryGoogle }) {
    return (
        <div class="speech-bubble">
            <strong className="bubbleText">{breweryName}</strong>
            <a href={breweryGoogle} target="_blank">
                <img className="gMapsBubbleLogo" src={gMapsBubbleLogo} />
            </a>
            <a href={breweryWebsite} target="_blank">
                <img className="webBubbleLogo" src={webLogo} />
            </a>
        </div>
    );
}

export default Marker;
