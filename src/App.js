import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      options: [0,0], //[0]: delete after picked, [1]: dishonest mode
      menu: true, // true: expanded menu (half list), false: collapsed menu (full list)
      list: ['Hike', 'Eat', 'Exercise', 'Sleep', 'Code', 'Cry', 'Run', 'Cook', 'Clean']
    };
  }

  // ListItem
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

  // Footer
  toggleMenu() {
    var newMenu = !this.state.menu;
    this.setState({menu: newMenu});
    console.log(this.state.menu);
  }

  decide(){
    var index = Math.floor(Math.random() * this.state.list.length);
    console.log(index);
    var x = document.getElementById('result');
    x.innerHTML = this.state.list[index];
  }

  render() {

    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push(<ListItem item={item} key={i} onClick={() => this.onClick(i)} delete={() => this.delete(i)} />)
    });

    return (
      <div>
    
        <Header leftLink={'https://www.scottqmn.com'} rightLink={'https://www.google.com'}/>

        <div id="main-list" className={this.state.menu ? "half-list" : "full-list"}>
            <ul>
                {listItems}
            </ul>
        </div>

        <Footer decide={() => this.decide()} addItem={() => this.addItem()} toggleMenu={() => this.toggleMenu()} menu={this.state.menu}/>

      </div>
    );
  }
}

export default App;
