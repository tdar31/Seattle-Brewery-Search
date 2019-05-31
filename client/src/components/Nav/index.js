import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import BeerIcon from "../../assets/beer.svg";
import Curve from "../../assets/CurveFinalFinal-01.png";

function Nav() {
    return (
        <nav className="nonLandingPageContainer">
            <img className="curve" src={Curve} />

            <img className="beer" src={BeerIcon} />

            <div className="seattleBrewSearch">
                <b>>Seattle Brewery Search</b>
            </div>

            <div className="navContainer">
                <Link to="/">
                    <a className="navLink">Home</a>
                </Link>

                <Link to="/map">
                    <a className="navLink">Map</a>
                </Link>

                <Link to="/cards">
                    <a className="navLink loginTab">Card View</a>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
