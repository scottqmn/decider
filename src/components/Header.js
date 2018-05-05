import React, { Component } from 'react';
import './Header.css';

import homeIcon from '../images/home.png';
import infoIcon from '../images/info.png';

class Header extends Component {

    render() {
        return(
            <div id="header" className="container">
                <a href={this.props.leftLink}><img id="home" alt="home" src={homeIcon}/></a>
                <h1 onClick={this.props.clear}>Decider</h1>
                <a onClick={() => alert(this.props.info)}><img id="info" alt="info" src={infoIcon}/></a>
            </div>
        );
    }
}

  export default Header;