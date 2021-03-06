import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Curve from "../../assets/Three-01.png";
import BeerIcon from "../../assets/beer.svg";

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
                    <a className="navLink">Card View</a>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
