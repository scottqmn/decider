import React, { Component } from 'react';
import './ListItem.css';

import Menu from '../images/menu.png';
import Cross from '../images/cross.png';
import {classPicker} from '../Helper.js';

class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      centerContent: true
    };
  }

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

  toggleWeight() {
    if (!this.props.options.weighted)
      alert("Enable weighted option first");
    else
      this.setState({centerContent: !this.state.centerContent});
  }

  renderContent() {
    if (this.state.centerContent) {
      return (
        <div className="list-item__name" onClick={() => this.props.rename()}>
          {this.props.item}
        </div>
      );
    }
    else {
      return (
        <div className="list-item__weight">
          <p>
            <span onClick={() => this.props.editWeight(false)}>  -  </span>
            {this.props.weight}
            <span onClick={() => this.props.editWeight(true)}>  +  </span>
          </p>
        </div>
      )
    }
  }

  render() {
    return (
      <li>
        <div className={this.highlight()}>
          <div className="list-item__button" onClick={() => this.toggleWeight()}>
            <img className="item__button--menu" src={Menu} alt="menu"/>
          </div>
          {this.renderContent()}
          <div className="list-item__button" onClick={() => this.props.delete()}>
            <img className="item__button--cross" src={Cross} alt="cross"/>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;