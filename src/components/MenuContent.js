import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './MenuContent.css';

import OptionToggle from './OptionToggle.js'

class MenuContent extends Component {

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
                    <div id="toggles" className="menu-content__toggles">
                        {listToggles}
                    </div>
                );
            case 1:
                return (
                    <div id="decide" className="menu-content__decide">
                        <p id="greeting" className="menu-content__decide__greeting">Today you should</p>
                        <p id="result" className="menu-content__decide__result">{this.props.selected}</p>
                    </div>
                );
            default:
                return (
                    <div id="add-item" className="menu-content__add-item">
                        <input type="text" id="listItem" placeholder="Add item"/>
                        <button id="addBtn" type="submit" onClick={this.props.addItem}>Add</button>
                    </div>
                );
        }
    }

    render() {
        return(
            <div id="menu-content" className="menu-content">
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