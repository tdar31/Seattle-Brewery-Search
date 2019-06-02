import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {MarkerStyles} from './MarkerStyles.js';

export default class Marker extends Component {
// Pretty sure this is deprecated in React but leaving it commented out since the example used it
//   static propTypes = {
//     text: PropTypes.string
//   };

//   static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={MarkerStyles}>
          {this.props.text}
       </div>
    );
  }
}