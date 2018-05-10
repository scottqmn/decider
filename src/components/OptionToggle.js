import React, { Component } from 'react';
import './OptionToggle.css';

import RunnerUp from '../images/stands.png';
import Weighted from '../images/weighted.png';
import NA from '../images/options.png';


class OptionToggle extends Component {

    //translates camelCase to Regular Form
    translate() {
        var s = this.props.type;
        return s.split(/(?=[A-Z])/).map(function(p) {
            return p.charAt(0).toUpperCase() + p.slice(1);
        }).join(' ');
    }

    iconize() {
        switch (this.props.type){
            case 'runnerUp':
                return RunnerUp;
                break;
            case 'weighted':
                return Weighted;
                break;
            default:
                return NA;
        }
    }
    

    render() {
        var name = this.translate();

        return(
            <div className="toggle">
                <div onClick={() => this.props.optionsToggle(this.props.type)} className={this.props.options[this.props.type] ? "toggle-on" : "toggle-off"}>
                    <img src={this.iconize()}/>
                </div>
                <p className="description">{name}</p>
            </div>
        );
    }
}


  export default OptionToggle;