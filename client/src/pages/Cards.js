import React, { Component } from "react";
// import CardsBody from "../components/CardsBody";
import Nav from "../components/Nav";
import "./style.css";

class Cards extends Component {
    state = {};

    render() {
        return (
            <div>
                {/* <CardsBody /> */}
                <Nav />
                <div>REE Cards PAGE</div>
            </div>
        );
    }
}

export default Cards;
