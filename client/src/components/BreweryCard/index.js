import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import BeerIcon1 from "../../assets/beer(1).svg";
import gMapsLogo from "../../assets/GoogleMapsLogo.svg";
import webLogo from "../../assets/earth-globe.svg";

function BreweryCard({ breweryName, breweryWebsite, breweryGMaps }) {
    return (
        <div className="breweryCard">
            <img className="brewIcon" src={BeerIcon1} />
            <div className="brewName">{breweryName}</div>
            <a href={breweryGMaps} target="_blank">
                <img className="gMapsLogo" src={gMapsLogo} />
            </a>
            <a href={breweryWebsite} target="_blank">
                <img className="webLogo" src={webLogo} />
            </a>
        </div>
    );
}

export default BreweryCard;
