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
        autoExpand: false,
        dishonest: false,
        night: false,
        popUp: false,
        runnerUp: false,
        weighted: false
      },
      menu: true, // true: expanded menu (half list), false: collapsed menu (full list)
      list: ['Hike', 'Eat', 'Sleep', 'Code', 'Cry', 'Cook', 'Fix max height of list items','Publish'],
      weights: [3, 3, 3, 3, 3, 3, 3, 3], //between 1-5, i.e. item with weight 5 is 5x more likely to be picked over item with weight 1
      selected: [-1, -2, -3], // last two indexes optional for runnerUp
      foolsGold: -1,
      info: "Hi, I'm Scott.\nThis is my first web app using ReactJS.\nI created this because my girlfriend and I hate having to decide on things.\nYes I was being petty."

    };


    this.optionsToggle = this.optionsToggle.bind(this);
  }

  // ListItem

  clearAll() {
    if (window.confirm('Are you sure you want to clear your list?'))
      this.setState({list: [], selected: -1});
  }

  optionsToggle(property) {
    let newOptions = {...this.state.options};
    newOptions[property] = !this.state.options[property];
    this.setState({options: newOptions});

    //check if dishonest was enabled
    if(property === 'dishonest' && newOptions[property]) {
      var len = this.state.list.length;
      var cheat = (len > 0) ? Math.floor(Math.random() * len) : -1;

      var shame = 'Cheater';
      for (var i = 0; i < cheat; i++) {
        shame += ' !';
      }
      alert(shame);

      this.setState({foolsGold: cheat});
    }
  }

  delete(index) {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({list: newList});

    var newSelected = this.state.selected.slice();
    newSelected.forEach(function(pos, i) {
      if (index === pos) {
        newSelected[i] = -1;
      }
      else if (index < pos) {
        newSelected[i]--;
      }
    });
    this.setState({selected: newSelected});
  }

  edit(index, newItem) {
    //todo: figure out how to make this usable
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
  }

  decide(){

    var len = this.state.list.length;

    //autoDelete: true
    if(this.state.options.autoDelete){
      this.delete(this.state.selected[0]);
      len--;
      //TODO: delete backup selections if runnerUp: true
    }

    var gold;

    if (!this.state.options.dishonest){
      gold = (len > 0) ? Math.floor(Math.random() * len) : -1;
    }
    else {
      gold = this.state.foolsGold;
      this.optionsToggle('dishonest');
    }

    var silver = (len > 1) ? Math.floor(Math.random() * len) : -2;
    var bronze = (len > 2) ? Math.floor(Math.random() * len) : -3;

    //check for duplicates
    while(silver === gold || bronze === gold || silver === bronze){
      silver = (len > 1) ? Math.floor(Math.random() * len) : -2;
      bronze = (len > 2) ? Math.floor(Math.random() * len) : -3;
    }
    
    this.setState({selected: [gold, silver, bronze]});
  }

  render() {

    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push(
        <ListItem 
          item={item} 
          key={i} 
          index={i} 
          selected={this.state.selected} 
          delete={() => this.delete(i)} 
          options={this.state.options} 
        />)
    });
    var selected = (this.state.selected[0] >= 0) ? this.state.list[this.state.selected[0]] : "Decide on something";

    return (
      <div id="interface" className={this.state.options.night ? "interface-night" : "interface-day"}>
    
        <Header 
          leftLink={'https://www.scottqmn.com'} 
          options={this.state.options} 
          test={this.optionsToggle} 
          info={this.state.info}
        />

        <div id="main-list" className={this.state.menu ? "half-list" : "full-list"}>
            <ul>
                {listItems}
            </ul>
        </div>

        <Footer 
          decide={() => this.decide()} 
          addItem={() => this.addItem()} 
          selected={selected} 
          toggleMenu={() => this.toggleMenu()} 
          menu={this.state.menu} 
          options={this.state.options} 
          optionsToggle={this.optionsToggle}
        />
      </div>
    );
  }
}

export default App;
