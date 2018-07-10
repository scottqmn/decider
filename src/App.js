import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';
import Footer from './components/Footer.js';
import { classPicker } from './Helper.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        autoDelete: false,
        dishonest: false,
        night: false,
        popUp: true,
        runnerUp: false,
        weighted: false
      },
      menu: false, // true: expanded menu (half list), false: collapsed menu (full list)
      list: ['Hike', 'Sleep', 'Code', 'Read', 'Cook', 'Write'],
      weights: [3, 3, 3, 3, 3, 3], //between 1-5, i.e. item with weight 5 is 5x more likely to be picked over item with weight 1
      selected: [-1, -2, -3], // last two indexes optional for runnerUp
      foolsGold: -1,
      info: "Hi, I'm Scott.\nThis is my first web app using ReactJS.\nI created this because my girlfriend and I hate having to decide on things.\nYes I was being petty."

    };

    this.optionsToggle = this.optionsToggle.bind(this);
  }

  clearAll() {
    if (window.confirm('Are you sure you want to clear your list?'))
      this.setState({list: [], selected: -1});
  }

  delete(index) {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({list: newList});

    var newWeights = this.state.weights.slice();
    newWeights.splice(index, 1);
    this.setState({weights: newWeights});

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

  rename(index) {
    //todo: figure out how to make this usable
    var newName = prompt("Rename item?");
    if (newName !== null && newName !== "") {
      var newList = this.state.list.slice();
      newList[index] = newName;
      this.setState({list: newList});
    }
  }

  editWeight(index, change) {
    var newWeights = this.state.weights.slice();
    if (change && newWeights[index] < 5)
      newWeights[index]++;
    else if (!change && newWeights[index] > 1)
      newWeights[index]--;
    this.setState({weights: newWeights});
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

  decide(){
    var len = this.state.list.length;

    //autoDelete: true
    if(this.state.options.autoDelete && this.state.selected[0] >= 0){
      this.delete(this.state.selected[0]);
      len--;
      //TODO: delete backup selections if runnerUp: true
    }

    var gold;

    if (this.state.options.dishonest){
      gold = this.state.foolsGold;
      this.optionsToggle('dishonest');
    }
    else {
      gold = (len > 0) ? Math.floor(Math.random() * len) : -1;
    }

    var silver = this.pickRandom(len, 1, -2);
    var bronze = this.pickRandom(len, 2, -3);

    //check for duplicates
    while(silver === gold || bronze === gold || silver === bronze){
      silver = this.pickRandom(len, 1, -2);
      bronze = this.pickRandom(len, 2, -3);
    }
    
    this.setState({selected: [gold, silver, bronze]});
  }

  pickRandom(len, min, def) {
    return (len > min) ? Math.floor(Math.random() * len) : def;
  }

  // Footer
  toggleMenu() {
    var newMenu = !this.state.menu;
    this.setState({menu: newMenu});
  }


  optionsToggle(property) {
    let newOptions = {...this.state.options};
    newOptions[property] = !newOptions[property];
    this.setState({options: newOptions});

    //check if dishonest was enabled
    if(property === 'dishonest' && newOptions[property]) {
      this.dishonest();
    }
  }

  dishonest() {
    var len = this.state.list.length;
    var cheat = (len > 0) ? Math.floor(Math.random() * len) : -1;

    var shame = 'Cheater';
    for (var i = 0; i < cheat; i++) {
      shame += '!';
    }
    alert(shame);

    this.setState({foolsGold: cheat});
  }


  render() {

    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push(
        <ListItem 
          item={item} 
          key={i} 
          index={i}
          weight={this.state.weights[i]} 
          selected={this.state.selected} 
          rename={() => this.rename(i)}
          delete={() => this.delete(i)} 
          editWeight={(change) => this.editWeight(i, change)}
          options={this.state.options} 
        />)
    });

    var selected = (this.state.selected[0] >= 0) ? this.state.list[this.state.selected[0]] : "Decide on something";


    return (
      <div id="interface" className={classPicker("interface", "night", "day", this.state.options.night)}>
        <div className="header-container">
          <Header 
            leftLink={'https://www.scottqmn.com'} 
            options={this.state.options} 
            test={this.optionsToggle} 
            info={this.state.info}
          />
        </div>

        <div id="main-list" className="main-list">
            <ul>
                {listItems}
            </ul>
        </div>

        <div className={classPicker("footer-container", "full", "half", this.state.menu)}>
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
        
      </div>
    );
  }
}

export default App;
