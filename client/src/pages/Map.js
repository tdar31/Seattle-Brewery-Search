import React, { Component } from "react";
import Nav from "../components/Nav";
import "./style.css";
import API from "../utils/API";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker/Marker.js";
import FilterButtons from "../components/FilterButtons";

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 47.6062,
            lng: -122.3321
        },
        zoom: 13
    };

    state = {
        brewDataMaster: [],
        brewData: []
    };

    componentWillMount() {
        API.getBreweryData()
            .then(res => {
                this.setState(
                    {
                        brewDataMaster: res.data,
                        brewData: res.data
                    },
                    function() {
                        // this.filterCheck();
                    }
                );
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                {/* <div className="sideSpace" /> */}
                <div className="mapContainer">
                    {/* {this.state.brewData.map((breweryData, index) => (
                        <FilterButtons
                            key={index}
                            breweryRegion={breweryData.region}
                        />
                    ))} */}
                    <GoogleMapReact
                        bootstrapURLKeys={
                            {
                                // key: "AIzaSyDX6dNHTuVmhjdNOpff1FQk500tcdpQ1Eo"
                                // No this is not a mistake.  The API key is suppose to be exposed. You cannot use enviroment variables to hide it
                                // https://stackoverflow.com/questions/1364858/what-steps-should-i-take-to-protect-my-google-maps-api-key
                            }
                        }
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        {/* <Marker
                            lat={"47.580335"}
                            lng={"-122.406805"}
                            text="Pedfdsafsddler"
                        /> */}
                        {this.state.brewData.map((breweryData, index) => (
                            <Marker
                                key={index}
                                breweryName={breweryData.name}
                                lat={breweryData.latitude}
                                lng={breweryData.longitude}
                                breweryWebsite={breweryData.website}
                            />
                        ))}
                    </GoogleMapReact>
                </div>
                {/* <div className="brewCardContainer">
                    {this.state.brewData.map((breweryData, index) => (
                        <MapBrewCard
                            key={index}
                            breweryName={breweryData.name}
                            // brewIcon={breweryData.}
                            // breweryGMaps={breweryData.}
                            breweryWebsite={breweryData.website}
                        />
                    ))}
                </div> */}

                {/* <div className="sideSpace" /> */}
            </div>
        );
    }
}

export default Map;
