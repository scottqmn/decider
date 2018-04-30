import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

    render() {
      return (
        <li className="list-item" onClick={this.props.onClick}>
          <div className="container">
            {this.props.item}
            <div className="item-options">
              <button type="button" onClick={() => alert("not yet lmao")}>?</button>
              <button type="button" onClick={() => this.props.delete()}>X</button>
            </div>
          </div>
        </li>
      );
    }
  }

  export default ListItem;