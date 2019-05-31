import React, { Component } from "react";
// import CardsBody from "../components/CardsBody";
import Nav from "../components/Nav";
import BreweryCard from "../components/BreweryCard";
import "./style.css";

class Cards extends Component {
    state = {};

    render() {
        return (
            <div>
                {/* <CardsBody /> */}
                <Nav />
                <div className="sideSpace" />
                <div className="cardContainer">
                    <div>REE</div>
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                    <BreweryCard />
                </div>
                <div className="sideSpace" />
            </div>
        );
    }
}

export default Cards;
