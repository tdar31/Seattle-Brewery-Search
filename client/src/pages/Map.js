import React, { Component } from "react";
// import MapBody from "../components/MapBody";
import Nav from "../components/Nav";
import "./style.css";
import API from "../utils/API";
import GoogleMapReact from "google-map-react";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 47.6062,
            lng: -122.3321
        },
        zoom: 11
    };

    state = {
        brewData: [],
        keyGMAPS: process.env.GMAPSAPI
    };

    componentWillMount() {
        API.getBreweryData()
            .then(res => {
                this.setState(
                    {
                        brewData: res.data
                    },
                    function() {
                        console.log("this.state.brewData: ", this.state);
                    }
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
                            // key: process.env.gMapsAPI
                            key: this.state.keyGMAPS
                        }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        {/* <AnyReactComponent
                            lat={47.6062}
                            lng={-122.3321}
                            text="My Marker"
                        /> */}
                    </GoogleMapReact>
                </div>
                <div className="brewCardContainer" />
                <div className="sideSpace" />
            </div>
        );
    }
}

export default Map;
