import React, { Component } from 'react';
import './Footer.css';
import MenuContent from './MenuContent.js';
import Button from './Button.js';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
          contentView: 1, //0: settings; 1: decide; 2: add item
        };
    }

    switchMenu(val) {
        //check popUp for decide
        if (val === 1){
            this.props.decide();
            if ((this.props.options.popUp && !this.props.menu) || 
                (!this.props.options.popUp && this.props.menu))
                this.props.toggleMenu();
        }
        //check if same
        else if (this.state.contentView === val || !this.props.menu){
            this.props.toggleMenu();
        }

        this.setState({contentView: val});
    }

    classPicker() {
        var theme = (this.props.options.night) ? "footer-night" : "footer-day";
        var size = (this.props.menu) ? " full-menu" : " half-menu";
        return theme + size;
    }

    render() {
        return(
            <div id="footer" className={this.classPicker()}>

                {this.props.menu ? 
                    <MenuContent 
                        selected={this.props.selected} 
                        addItem={this.props.addItem} 
                        menu={this.props.menu} 
                        content={this.state.contentView} 
                        options={this.props.options} 
                        optionsToggle={this.props.optionsToggle}
                    /> : 
                    <div></div>
                }

                <div id="buttons" className="container">
                    <Button 
                        options={this.props.options} 
                        onClick={() => this.switchMenu(0)} 
                        value={0}
                    />
                    <Button 
                        options={this.props.options} 
                        onClick={() => this.switchMenu(1)} 
                        value={1}
                    />
                    <Button 
                        options={this.props.options} 
                        onClick={() => this.switchMenu(2)} 
                        value={2}
                    />
                </div>
            </div>
        );
    }
}

  export default Footer;