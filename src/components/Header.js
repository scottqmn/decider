import React, { Component } from 'react';
import './Header.css';

import homeIcon from '../images/home.png';
import infoIcon from '../images/info.png';
import {classPicker, invert} from '../Helper.js';

class Header extends Component {

    render() {
        return(
            <div id="header" className={classPicker("header", "night", "day", this.props.options.night)}>
                <a className="header__icon" href={this.props.leftLink}>  
                    <img id="home" className={invert(this.props.options.night)} alt="home" src={homeIcon}/>
                </a>
                <p className="header__title">Decider</p>
                <a className="header__icon" onClick={() => alert(this.props.info)}>
                    <img id="info" className={invert(this.props.options.night)} alt="info" src={infoIcon}/>
                </a>
            </div>
        );
    }
}

  export default Header;