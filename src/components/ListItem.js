import React, { Component } from 'react';
import './ListItem.css';

import Menu from '../images/menu.png';
import Cross from '../images/cross.png';
import {classPicker} from '../Helper.js';

class ListItem extends Component {

  highlight() {
    var resultClass = "list-item";
    if(this.props.options.runnerUp){
      switch(this.props.index) {
        case this.props.selected[0]:
          resultClass += " list-item--gold";
          break;
        case this.props.selected[1]:
          resultClass += " list-item--silver";
          break;
        case this.props.selected[2]:
          resultClass += " list-item--bronze";
          break;
        default:
          resultClass += " list-item--non-selected";
          break;
      }
    }
    else {
      resultClass = classPicker("list-item", "selected", "non-selected", (this.props.selected[0] === this.props.index));
    }

    return resultClass;
  }

  render() {
    return (
      <li>
        <div className={this.highlight()}>
          <div className="list-item__button" onClick={() => alert("TODO -scott")}>
            <img className="item__button--menu" src={Menu} alt="menu"/>
          </div>
          <div className="list-item__name">
            {this.props.item}
          </div>
          <div className="list-item__button" onClick={() => this.props.delete()}>
            <img className="item__button--cross" src={Cross} alt="cross"/>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;