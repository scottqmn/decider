import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './MenuContent.css';

import OptionToggle from './OptionToggle.js'

class MenuContent extends Component {

    renderContent() {
        switch(this.props.content) {
            case 0:
                return (
                    <div id="options" className="">
                        <div id="toggles" className="container">
                            <OptionToggle options={this.props.options} type='autoDelete' optionsToggle={this.props.optionsToggle}/>
                            <OptionToggle options={this.props.options} type='autoExpand' optionsToggle={this.props.optionsToggle}/>
                            <OptionToggle options={this.props.options} type='dishonest' optionsToggle={this.props.optionsToggle}/>
                            <OptionToggle options={this.props.options} type='runnerUp' optionsToggle={this.props.optionsToggle}/>
                            <OptionToggle options={this.props.options} type='weighted' optionsToggle={this.props.optionsToggle}/>
                        </div>

                    </div>
                );
            case 1:
                return (
                    <div id="decide">
                        <p id="greeting">Today you should</p>
                        <p id="result">{this.props.selected}</p>
                    </div>
                );
            default:
                return (
                    <div id="add-item">
                        <input type="text" id="listItem" placeholder="Add item"/>
                        <button id="myBtn" type="submit" onClick={this.props.addItem}>Add</button>
                    </div>
                );
        }
    }

    render() {
        return(
            <div id="menu-content" className={this.props.menu ? "full-menu" : "half-menu"}>
                {this.props.menu ? this.renderContent() : <div></div>}
            </div>
        );
    }
}

MenuContent.propTypes = {
    menu: PropTypes.bool,
    content: PropTypes.number,
};

  export default MenuContent;