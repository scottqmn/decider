import React, { Component } from 'react';
import './OptionToggle.css';

import AutoDelete from '../images/trash.png';
import Dishonest from '../images/dishonest.png';
import Night from '../images/night.png';
import PopUp from '../images/popup.png';
import RunnerUp from '../images/stands.png';
import Weighted from '../images/weighted.png';
import NA from '../images/options.png';
import {classPicker, invert, translate} from '../Helper.js';


class OptionToggle extends Component {

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

    render() {
        var name = translate(this.props.type);

        return(
            <div className="toggle-container">
                <div title={name} onClick={() => this.props.optionsToggle(this.props.type)} className={classPicker("toggle", "on", "off", this.props.options[this.props.type])}>
                    <img className={invert(this.props.options.night)} src={this.getIcon()} alt={this.props.type}/>
                </div>
                <p className={classPicker("toggle-name", "night", "day", this.props.options.night)}>{name}</p>
            </div>
            
        );
    }
}


  export default OptionToggle;