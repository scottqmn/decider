import React, { Component } from 'react';
import './Button.css';

import addIcon from '../images/cross.png';
import decideIcon from '../images/decide.png';
import optionsIcon from '../images/options.png';

class Button extends Component {

    render() {
        var icons = [optionsIcon, decideIcon, addIcon];
        var alts = ["options", "decide", "add"];

        return(
            <div onClick={this.props.onClick}><img src={icons[this.props.value]} alt={alts[this.props.value]}/></div>
        );
    }
}

  export default Button;