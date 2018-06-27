import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './MenuContent.css';

import OptionToggle from './OptionToggle.js'

class MenuContent extends Component {

    //translates camelCase to Regular Form
    translate(s) {
        return s.split(/(?=[A-Z])/).map(function(p) {
            return p.charAt(0).toUpperCase() + p.slice(1);
        }).join(' ');
    }



    renderContent() {
        switch(this.props.content) {
            case 0:
                var listToggles = [];
                Object.keys(this.props.options).forEach((toggle, i) => {
                    listToggles.push(
                        <OptionToggle 
                            key={i} 
                            index={i} 
                            options={this.props.options} 
                            optionsToggle={this.props.optionsToggle} 
                            type={toggle}
                        />
                    )
                });

                return (
                    <div id="options" className="">
                        <div id="toggles" className="container">
                            {listToggles}
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
                        <button id="addBtn" type="submit" onClick={this.props.addItem}>Add</button>
                    </div>
                );
        }
    }

    render() {
        return(
            <div id="menu-content" className={this.props.menu ? "full-content" : "half-content"}>
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