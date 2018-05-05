import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './MenuContent.css';

class MenuContent extends Component {
    renderContent() {
        switch(this.props.content) {
            case 0:
                return (
                    <div id="options">
                        <p>SETTINGS BOI</p>
                        <p>IOU: settings and options and stuff - scoot</p>
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