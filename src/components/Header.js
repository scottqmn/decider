import React, { Component } from 'react';
import './Header.css';

import homeIcon from '../images/home.png';
import infoIcon from '../images/info.png';
import Dice from '../images/dice.png';

class Header extends Component {

    headerClass() {
        return (this.props.options.night) ? "header-night container" : "header-day container";
    }

    imgClass() {
        return (this.props.options.night) ? "img-invert" : "";
    }

    render() {
        return(
            <div id="header" className={this.headerClass()}>
                <a href={this.props.leftLink}>  
                    <img id="home" className={this.imgClass()} alt="home" src={homeIcon}/>
                </a>
                <a onClick={() => this.props.test('runnerUp')}>
                    <img id="dice" className={this.imgClass()} alt="dice" src={Dice}/>
                </a>
                <a onClick={() => alert(this.props.info)}>
                    <img id="info" className={this.imgClass()} alt="info" src={infoIcon}/>
                </a>
            </div>
        );
    }
}

  export default Header;