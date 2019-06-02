import React, { Component } from "react";
import Nav from "../components/Nav";
import MapBrewCard from "../components/MapBrewCard";
import "./style.css";
import API from "../utils/API";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker/Marker.jsx";
import shouldPureComponentUpdate from "react-pure-render/function";
const MarkerTest = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 47.6062,
            lng: -122.3321
        },
        zoom: 11
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    state = {
        brewData: []
    };

    componentWillMount() {
        API.getBreweryData()
            .then(res => {
                this.setState(
                    {
                        brewData: res.data
                    }
                    // ,
                    // function() {
                    //     console.log("this.state: ", this.state);
                    // }
                );
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="sideSpace" />
                <div
                    className="mapContainer"
                    style={{ height: "85vh", width: "55vw" }}
                >
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyDX6dNHTuVmhjdNOpff1FQk500tcdpQ1Eo"
                            // No this is not a mistake.  The API key is suppose to be exposed. You cannot use enviroment variables to hide it
                            // https://stackoverflow.com/questions/1364858/what-steps-should-i-take-to-protect-my-google-maps-api-key
                        }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        {/* This has no CSS just passes the text down as a Prop */}
                        {/* <MarkerTest
                            lat={47.6638908}
                            lng={-122.3771086}
                            text="Peddler"
                        /> */}
                        <Marker
                            lat={47.6638908}
                            lng={-122.3771086}
                            text="Peddler"
                        />
                    </GoogleMapReact>
                </div>
                <div className="brewCardContainer">
                    {/* <MapBrewCard /> */}
                    {this.state.brewData.map((breweryData, index) => (
                        <MapBrewCard
                            key={index}
                            breweryName={breweryData.name}
                            // brewIcon={breweryData.}
                            // breweryGMaps={breweryData.}
                            breweryWebsite={breweryData.website}
                        />
                    ))}
                </div>

                <div className="sideSpace" />
            </div>
        );
    }
}

export default Map;
