import React, { Component } from 'react';
import './ListItem.css';

import Menu from '../images/menu.png';
import Cross from '../images/cross.png';

class ListItem extends Component {

    render() {
      return (
        <li className={(this.props.selected === this.props.index) ? "selected" : "non-selected"}>
          <div className="container">
            <button type="button" onClick={() => alert("not yet lmao")}>
              <img className="menu" src={Menu} alt="menu"/>
            </button>
            {this.props.item}
            <button type="button" onClick={() => this.props.delete()}>
              <img className="cross" src={Cross} alt="cross"/>
            </button>
          </div>
        </li>
      );
    }
  }

  export default ListItem;