import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
import BeerIcon2 from "../../assets/beer(3).svg";
// import gMapsLogo from "../../assets/GoogleMapsLogo.svg";
import webLogo from "../../assets/earth-globe.svg";

function BreweryCard({ breweryName, breweryWebsite }) {
    return (
        <div>
            <div className="mapBrewCard">
                <img className="mapBrewIcon" src={BeerIcon2} />
                <div className="mapBrewName">{breweryName}</div>
                <a href={breweryWebsite} target="_blank">
                    <img className="webBrewLogo" src={webLogo} />
                </a>
            </div>
        </div>
    );
}

export default BreweryCard;
