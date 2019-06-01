import React, { Component } from "react";
// import MapBody from "../components/MapBody";
import Nav from "../components/Nav";
import "./style.css";
import API from "../utils/API";

class Map extends Component {
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
                    function() {
                        console.log(
                            "this.state.brewData: ",
                            this.state.brewData
                        );
                    }
                );
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {/* <MapBody /> */}
                <Nav />
                <div>REE MAP PAGE</div>
            </div>
        );
    }
}

export default Map;
