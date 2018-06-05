import React, { Component } from 'react';
import './Header.css';

import homeIcon from '../images/home.png';
import infoIcon from '../images/info.png';
import Dice from '../images/dice.png';

class Header extends Component {

    render() {
        return(
            <div id="header" className={this.props.options.night ? "container header-night" : "container header-day"}>
                <a href={this.props.leftLink}><img id="home" className={this.props.options.night ? "img-invert" : ""} alt="home" src={homeIcon}/></a>
                <a onClick={() => this.props.test('runnerUp')}><img id="dice" className={this.props.options.night ? "img-invert" : ""} alt="dice" src={Dice}/></a>
                <a onClick={() => alert(this.props.info)}><img id="info" className={this.props.options.night ? "img-invert" : ""} alt="info" src={infoIcon}/></a>
            </div>
        );
    }
}

  export default Header;