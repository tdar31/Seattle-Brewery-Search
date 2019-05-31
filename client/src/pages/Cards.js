import React, { Component } from "react";
// import CardsBody from "../components/CardsBody";
import Nav from "../components/Nav";
// import BreweryCard from "../components/BreweryCard";
import "./style.css";
import API from "../utils/API";

class Cards extends Component {
    state = {};

    componentWillMount() {
        API.getBreweryData()
            .then(res => {
                console.log("res: ", res);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {/* <CardsBody /> */}
                <Nav />
                <div className="sideSpace" />
                <div className="cardContainer">
                    {/* {this.state.selectedPlayerData.map((playerData, index) => (
                        <BreweryCard key={index} />
                    ))} */}
                </div>
                <div className="sideSpace" />
            </div>
        );
    }
}

export default Cards;
