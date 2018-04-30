import React, { Component } from 'react';
import './Footer.css';
import MenuContent from './MenuContent.js';
import Button from './Button.js';

import arrowIcon from '../images/hide.png';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
          contentView: 1, //0: settings; 1: decide; 2: add item
        };
    }

    switchContent(val) {
        if (val === 1) {
            this.props.decide();
        }
        this.setState({contentView: val});
    }

    render() {
        return(
            <div id="footer" className={this.props.menu ? "full-menu" : "half-menu"}>
                <img id="arrow" className={this.props.menu ? "" : "show"} src={arrowIcon} alt="arrow" onClick={this.props.toggleMenu}/>

                {this.props.menu ? <MenuContent selected={this.props.selected} addItem={this.props.addItem} menu={this.props.menu} content={this.state.contentView}/> : <div></div>}

                <div id="buttons" className="container">
                    <Button onClick={() => this.switchContent(0)} value={0}/>
                    <Button onClick={() => this.switchContent(1)} value={1}/>
                    <Button onClick={() => this.switchContent(2)} value={2}/>
                </div>
            </div>
        );
    }
}

  export default Footer;