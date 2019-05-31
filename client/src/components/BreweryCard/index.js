import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import gMapsLogo from "../../assets/GoogleMapsLogo.svg";
import webLogo from "../../assets/earth-globe.svg";

function BreweryCard({}) {
    return (
        <div className="breweryCard">
            <div className="brewIcon" />
            <div className="brewName">Brewery NameBrewery NameBrewery Name</div>
            <Link to="/">
                <img className="gMapsLogo" src={gMapsLogo} />
            </Link>
            <Link to="/">
                <img className="webLogo" src={webLogo} />
            </Link>
        </div>
    );
}

export default BreweryCard;
