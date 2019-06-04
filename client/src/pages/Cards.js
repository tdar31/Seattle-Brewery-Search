import React, { Component } from "react";
import Nav from "../components/Nav";
import BreweryCard from "../components/BreweryCard";
import "./style.css";
import API from "../utils/API";

class Cards extends Component {
    state = {
        brewData: []
    };

    componentWillMount() {
        API.getBreweryData()
            .then(res => {
                this.setState(
                    {
                        brewData: res.data
                    },
                    // function() {
                    //     console.log(
                    //         "this.state.brewData: ",
                    //         this.state.brewData
                    //     );
                    // }
                );
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="cardBody">
                <Nav />
                <div className="sideSpace" />
                <div className="cardContainer">
                    {this.state.brewData.map((breweryData, index) => (
                        <BreweryCard
                            key={index}
                            breweryName={breweryData.name}
                            breweryWebsite={breweryData.website}
                            breweryGMaps={breweryData.googleMapsLink}
                        />
                    ))}
                </div>
                <div className="sideSpace" />
            </div>
        );
    }
}

export default Cards;
