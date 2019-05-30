import React, { Component } from "react";
// import CardsBody from "../components/CardsBody";
import Nav from "../components/Nav";
import BreweryCard from "../components/BreweryCard";
import breweryData from "../assets/breweries.json";
import "./style.css";

class Cards extends Component {
    state = {};

    componentDidMount() {
        console.log("breweryData: ", breweryData);
    }

    render() {
        return (
            <div>
                {/* <CardsBody /> */}
                <Nav />
                <div>REE Cards PAGE</div>
                <BreweryCard />
            </div>
        );
    }
}

export default Cards;
