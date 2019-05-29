import React, { Component } from "react";
import Nav from "../components/Nav";
import HomeBody from "../components/HomeBody";
import "./style.css";

class Home extends Component {
    state = {};

    render() {
        return (
            <div>
                <Nav />
                <HomeBody />
            </div>
        );
    }
}

export default Home;
