import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";
import gMapsBubbleLogo from "../../assets/GoogleMapsLogo.svg";

export default class Marker extends Component {
    static propTypes = {
        $hover: PropTypes.bool,
        text: PropTypes.string
    };

    static defaultProps = {};

    render() {
        return (
            // <div className="bubbleMarker">{this.props.text}</div>
            <div>
                <div class="speech-bubble">
                    <strong className="bubbleText">{this.props.text}</strong>
                    <Link to="/">
                        <img
                            className="gMapsBubbleLogo"
                            src={gMapsBubbleLogo}
                        />
                    </Link>
                </div>

                {/* <a href="#" target="_blank">
                    <img className="webLogo" src="" />
                </a> */}
            </div>
        );
    }
}
