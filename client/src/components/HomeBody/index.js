import React, { Component } from "react";
import "./style.css";
import Curve from "../../assets/Curve3-01.png";
// import Nav from "../Nav";
import Particles from "react-particles-js";

class HomeBody extends Component {
    state = {};

    componentDidMount() {}

    render() {
        return (
            <div className="homeContainer">
                <img className="curve" src={Curve} />
                <div className="navContainer">HERE WE GO</div>
                <div className="particleContainer">
                    <Particles
                        className="reactParticlesContainer"
                        params={{
                            particles: {
                                number: {
                                    value: 150,
                                    density: { enable: true, value_area: 300 }
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
