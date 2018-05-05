import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        autoDelete: false,
        autoExpand: true,
        dishonest: false,
      },
      menu: false, // true: expanded menu (half list), false: collapsed menu (full list)
      list: ['Hike', 'Eat', 'Sleep', 'Code', 'Cry', 'Cook', 'Fix max height of list items','Clean'],
      selected: -1,
      info: "Hi, I'm Scott.\nThis is my first web app using ReactJS.\nI created this because my girlfriend and I\nhate having to decide on things.\nYes I was being petty."
    };
  }

  // ListItem

  clearAll() {
    if (window.confirm('Are you sure you want to clear your list?'))
      this.setState({list: [], selected: -1});
  }

  delete(index) {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({list: newList});
    if (index === this.state.selected) {
      this.setState({selected: -1});
    }
    else if (index < this.state.selected) {
      var newSelected = this.state.selected - 1;
      this.setState({selected: newSelected});
    }
  }

  addItem(){
    var item = document.getElementById("listItem").value;
    console.log("Adding " + item);
    if(item !== ""){
      document.getElementById("listItem").value = "";
      var newList = this.state.list.slice();
      newList.push(item);
      this.setState({list: newList});
    }
  }

  // Footer
  toggleMenu() {
    var newMenu = !this.state.menu;
    this.setState({menu: newMenu});
    console.log(newMenu ? "Showing Menu" : "Hidden Menu");
  }

  decide(){
    var index = Math.floor(Math.random() * this.state.list.length);
    console.log("Decided on " + index);
    this.setState({selected: index});
  }

  render() {

    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push(<ListItem item={item} key={i} index={i} selected={this.state.selected} delete={() => this.delete(i)} />)
    });
    var selected = (this.state.selected >= 0) ? this.state.list[this.state.selected] : "Decide on something";

    return (
      <div>
    
        <Header leftLink={'https://www.scottqmn.com'} clear={() => this.clearAll()} info={this.state.info}/>

        <div id="main-list" className={this.state.menu ? "half-list" : "full-list"}>
            <ul>
                {listItems}
            </ul>
        </div>

        <Footer decide={() => this.decide()} addItem={() => this.addItem()} selected={selected} toggleMenu={() => this.toggleMenu()} menu={this.state.menu}/>
      </div>
    );
  }
}

export default App;
