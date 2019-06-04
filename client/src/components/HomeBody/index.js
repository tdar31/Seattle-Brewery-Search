import React, { Component } from "react";
import "./style.css";
import Curve from "../../assets/Three-01.png";
import BeerIcon from "../../assets/beer.svg";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

class HomeBody extends Component {
    state = {};

    componentDidMount() {}

    render() {
        return (
            <div className="homeContainer">
                <img className="curve" src={Curve} />
                <img className="beer" src={BeerIcon} />
                <div className="seattleBrewSearch">
                    <b>>Seattle Brewery Search</b>
                </div>
                <div className="welcomeText bodyText">
                    Need some help finding where to drink in the Emerald City?
                </div>
                <div className="descriptionText bodyText">
                    Click the button below to take you to the map to get started
                </div>
                <Link to="/map">
                    <button className="mapButton bodyText">Enter</button>
                </Link>

                <div className="navContainer">
                    {/* <Link to=""> */}
                    <div className="navLink">Home</div>
                    {/* </Link> */}

                    <Link to="/map">
                        <a className="navLink">Map</a>
                    </Link>

                    <Link to="/cards">
                        <a className="navLink loginTab">Card View</a>
                    </Link>
                </div>
                <div className="particleContainer">
                    <Particles
                        className="reactParticlesContainer"
                        params={{
                            particles: {
                                number: {
                                    value: 75,
                                    density: { enable: true, value_area: 200 }
                                },
                                color: { value: "#ffffff" },
                                shape: {
                                    type: "circle",
                                    stroke: { width: 0, color: "#000000" },
                                    polygon: { nb_sides: 5 },
                                    image: {
                                        src: "img/github.svg",
                                        width: 100,
                                        height: 100
                                    }
                                },
                                opacity: {
                                    value: 0.5,
                                    random: false,
                                    anim: {
                                        enable: false,
                                        speed: 1,
                                        opacity_min: 0.1,
                                        sync: false
                                    }
                                },
                                size: {
                                    value: 4,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 40,
                                        size_min: 0.1,
                                        sync: false
                                    }
                                },
                                line_linked: {
                                    enable: false,
                                    distance: 150,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1
                                },
                                move: {
                                    enable: true,
                                    speed: 6,
                                    direction: "top",
                                    random: false,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 1200
                                    }
                                }
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default HomeBody;
