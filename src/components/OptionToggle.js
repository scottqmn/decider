import React, { Component } from 'react';
import './OptionToggle.css';

import AutoDelete from '../images/trash.png';
import AutoExpand from '../images/autoexpand.png';
import Dishonest from '../images/dishonest.png';
import Night from '../images/night.png';
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
            case 'autoExpand':
                return AutoExpand;
            case 'dishonest':
                return Dishonest;
            case 'night':
                return Night;
            case 'runnerUp':
                return RunnerUp;
            case 'weighted':
                return Weighted;
            default:
                return NA;
        }
    }
    

    render() {
        var name = this.translate();

        return(
            <div className="toggle" title={name}>
                <div onClick={() => this.props.optionsToggle(this.props.type)} className={this.props.options[this.props.type] ? "toggle-on" : "toggle-off"}>
                    <img className={this.props.options.night ? "img-invert" : ""} src={this.getIcon()} alt={this.props.type}/>
                </div>
            </div>
        );
    }
}


  export default OptionToggle;