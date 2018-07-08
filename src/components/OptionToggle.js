import React, { Component } from 'react';
import './OptionToggle.css';

import AutoDelete from '../images/trash.png';
import Dishonest from '../images/dishonest.png';
import Night from '../images/night.png';
import PopUp from '../images/popup.png';
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

    getIcon() {
        switch (this.props.type){
            case 'autoDelete':
                return AutoDelete;
            case 'dishonest':
                return Dishonest;
            case 'night':
                return Night;
            case 'popUp':
                return PopUp;
            case 'runnerUp':
                return RunnerUp;
            case 'weighted':
                return Weighted;
            default:
                return NA;
        }
    }
    
    toggleClassPicker() {
        var result = "toggle";
        if (this.props.options[this.props.type])
            result += " toggle--on";
        else
            result += " toggle--off";
        return result;
    }

    render() {
        var name = this.translate();

        return(
            <div title={name} onClick={() => this.props.optionsToggle(this.props.type)} className={this.toggleClassPicker()}>
                <img className={this.props.options.night ? "img-invert" : ""} src={this.getIcon()} alt={this.props.type}/>
            </div>
        );
    }
}


  export default OptionToggle;