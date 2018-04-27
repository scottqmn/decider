import React, { Component } from 'react';
import addIcon from './images/add.png';
import decideIcon from './images/decide.png';
import optionsIcon from './images/options.png';
import hideIcon from './images/hide.png';
import './App.css';

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['Hike', 'Eat', 'Exercise', 'Sleep', 'Code', 'Cry', 'Sleep', 'Code', 'BOTTOM BOIS']
    };
  }

  onClick(index) {
    console.log("clicked on " + index);
  }

  delete(index) {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({list: newList});
  }

  addItem(){
    var item = document.getElementById("listItem").value;
    console.log(item);
    if(item !== ""){
      document.getElementById("listItem").value = "";
      var newList = this.state.list.slice();
      newList.push(item);
      this.setState({list: newList});
    }
  }

  decide(){
    var index = Math.floor(Math.random() * this.state.list.length);
    console.log(index);
    var x = document.getElementById('result');
    x.innerHTML = this.state.list[index];
  }

  resizeList(val) {
    // val = 0: half list
    // val = 1: full list
    if (val) {
      document.getElementById("main-list").classList.remove("full-list");
      document.getElementById("main-list").classList.add("half-list");
    }
    else {
      document.getElementById("main-list").classList.remove("half-list");
      document.getElementById("main-list").classList.add("full-list");
    }
  }

  hide() {
    this.resizeList(0);

    var x = document.getElementById('options');
    var y = document.getElementById('decide');
    var z = document.getElementById('add-item');
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = 'none';
  }

  showPopUp(val) {
    this.hide();
    this.resizeList(1);
    
    switch (val) {
      case 0:
        var x = document.getElementById('options');
        break;
      case 1:
        this.decide();
        var x = document.getElementById('decide');
        break;
      default:
        var x = document.getElementById('add-item');
    }

    x.style.display = "block";
    
  }

  render() {
    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push(<ListItem item={item} key={i} select={false} onClick={() => this.onClick(i)} delete={() => this.delete(i)} />)
    });

    return (
      <div>

        <div id="header" className="container">
          <button id="home" type="button">BACK</button>
          <h1>Decider</h1>
          <button id="info" type="button">INFO</button>
        </div>

        <div id="main-list" className="half-list">
          <ul>
            {listItems}
          </ul>
        </div>


        <div id="options" className="popup">
          <img className="hide" src={hideIcon} alt="hide" onClick={() => this.hide()} />
          <p> SETTINGS BOI</p>
        </div>

        <div id="decide" className="popup">
          <img className="hide" src={hideIcon} alt="hide" onClick={() => this.hide()} />
          <p id="greeting">Today you should</p>
          <p id="result">hire me lmao</p>
        </div>

        <div id="add-item" className="popup">
          <img className="hide" src={hideIcon} alt="hide" onClick={() => this.hide()} />
          <input type="text" id="listItem" placeholder="Add item"/>
          <button id="myBtn" type="submit" onClick={() => this.addItem()}>Add</button>
        </div>

        <div id="footer">
      
          <div className="container">
            <div className="footer-btn" onClick={() => this.showPopUp(0)}><img src={optionsIcon} alt="options"/></div>
            <div className="footer-btn" onClick={() => this.showPopUp(1)}><img src={decideIcon} alt="decide"/></div>
            <div className="footer-btn" onClick={() => this.showPopUp(2)}><img src={addIcon} alt="add"/></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
