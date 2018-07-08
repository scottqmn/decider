import React, { Component } from 'react';
import './Header.css';

import homeIcon from '../images/home.png';
import infoIcon from '../images/info.png';
import Dice from '../images/dice.png';

class Header extends Component {

    headerClassPicker() {
        var result = "header";
        if (this.props.options.night)
            result += " header--night";
        else
            result += " header--day";
        return result;
    }

    imgClassPicker() {
        return (this.props.options.night) ? "img-invert" : "";
    }

    render() {
        return(
            <div id="header" className={this.headerClassPicker()}>
                <a className="header__icon" href={this.props.leftLink}>  
                    <img id="home" className={this.imgClassPicker()} alt="home" src={homeIcon}/>
                </a>
                <a className="header__icon" onClick={() => this.props.test('runnerUp')}>
                    <img id="dice" className={this.imgClassPicker()} alt="dice" src={Dice}/>
                </a>
                <a className="header__icon" onClick={() => alert(this.props.info)}>
                    <img id="info" className={this.imgClassPicker()} alt="info" src={infoIcon}/>
                </a>
            </div>
        );
    }
}

  export default Header;