import React, { Component } from "react";
import PropTypes from "prop-types";
import shouldPureComponentUpdate from "react-pure-render/function";

import { MarkerStyles, MarkerStylesHover } from "./MarkerStyles.js";

export default class Marker extends Component {
    static propTypes = {
        $hover: PropTypes.bool,
        text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        const style = this.props.$hover ? MarkerStylesHover : MarkerStyles;

        return <div style={style}>{this.props.text}</div>;
    }
}
