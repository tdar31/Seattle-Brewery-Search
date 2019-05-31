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
                <div className="cardContainer">
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
            </div>
        );
    }
}

export default Cards;
