import React, { Component } from 'react';
import './Button.css';

import addIcon from '../images/cross.png';
import decideIcon from '../images/decide.png';
import optionsIcon from '../images/options.png';

class Button extends Component {
    classPicker() {
        var name = (this.props.options.night) ? "button-night" : "button-day";
        name += " button-all";
        return name;
    }

    render() {
        var icons = [optionsIcon, decideIcon, addIcon];
        var alts = ["options", "decide", "add"];

        return(
            <div 
                className={this.classPicker()} 
                onClick={this.props.onClick}>
                <img 
                    className={this.props.options.night ? "img-invert" : ""} 
                    src={icons[this.props.value]} 
                    alt={alts[this.props.value]}
                />
            </div>
        );
    }
}

  export default Button;