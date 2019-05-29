import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navContainer">
            {/* <img
                className="logoWhite"
                src={process.env.PUBLIC_URL + "/images/logoWhite.svg"}
            /> */}

            <div className="spacer" />

            <Link to="/">
                <a className="navLink">Home</a>
            </Link>

            <Link to="/">
                <a className="navLink">Map</a>
            </Link>

            <Link to="/">
                <a className="navLink loginTab">Card View</a>
            </Link>
        </nav>
    );
}

export default Nav;
