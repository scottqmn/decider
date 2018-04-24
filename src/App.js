import React, { Component } from 'react';
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
      list: ['Hike', 'Eat', 'Exercise', 'Sleep', 'Code', 'Cry']
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

  hide() {
    var x = document.getElementById('decide');
    var y = document.getElementById('add-item');
    x.style.display = "none";
    y.style.display = "none";
  }

  showPopUp(val) {
    this.hide();
    if (val) {
      this.decide();
      var x = document.getElementById('decide');
      x.style.display = "block";
    }
    else {
      var y = document.getElementById('add-item');
      y.style.display = "block";
    }
    
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

        <div id="main-list">
          <ul>
            {listItems}
          </ul>
        </div>

        <div id="add-item" className="popup">
          <p className="close-x" onClick={() => this.hide()}>X</p>
          <input type="text" id="listItem" placeholder="Add item"/>
          <button id="myBtn" type="submit" onClick={() => this.addItem()}>Add</button>
        </div>

        <div id="decide" className="popup">
          <p className="close-x" onClick={() => this.hide()}>X</p>
          <p id="greeting">Today you should</p>
          <p id="result">hire me lmao</p>
        </div>

        <div id="footer">
          <div className="container">
            <div className="footer-btn"><p>gear</p></div>
            <div className="footer-btn" onClick={() => this.showPopUp(true)}><p>bulb</p></div>
            <div className="footer-btn" onClick={() => this.showPopUp(false)}><p>add</p></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
