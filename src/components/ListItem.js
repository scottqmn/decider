import React, { Component } from 'react';
import './ListItem.css';

import Menu from '../images/menu.png';
import Cross from '../images/cross.png';

class ListItem extends Component {

  highlight() {
    if(this.props.options.runnerUp){
      switch(this.props.index) {
        case this.props.selected[0]:
          return "gold";
        case this.props.selected[1]:
          return "silver";
        case this.props.selected[2]:
          return "bronze";
        default:
          return "non-selected";
      }
    }
    else 
      return (this.props.selected[0] == this.props.index) ? "selected" : "non-selected";
  }

  render() {
    return (
      <li className={this.highlight()}>
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