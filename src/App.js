import React, { Component } from 'react';
import './App.css';


class TwoButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
    this.handleFirstButton = this.handleFirstButton.bind(this)
    this.handleSecondButton = this.handleSecondButton.bind(this)
  }

  handleFirstButton() {
    let newCounter = this.props.firstHandler(this.state.counter)
    this.setState({ counter: newCounter })
  }
  handleSecondButton() {
    let newCounter = this.props.secondHandler(this.state.counter)
    this.setState({ counter: newCounter })
  }
  render() {
    return (<div>
      <h1> {this.props.headerText} </h1>
      <h4> {this.state.counter} </h4>
      <button onClick={this.handleFirstButton}>{this.props.firstText}</button>
      <button onClick={this.handleSecondButton}>{this.props.secondText}</button>
    </div>)
  }
}


class App extends Component {
  constructor() {
    super()
    this.state = {
      buttonDisplayed: 1
    }
    this.displayFirst = this.displayFirst.bind(this)
    this.displaySecond = this.displaySecond.bind(this)
    this.displayThird = this.displayThird.bind(this)
  }
  displayFirst() {
    this.setState({ buttonDisplayed: 1 })

  }
  displaySecond() {
    this.setState({ buttonDisplayed: 2 })
  }
  displayThird() {
    this.setState({ buttonDisplayed: 3 })
  }
  render() {
    let twoButtons = null
    if(this.state.buttonDisplayed === 1) {
      twoButtons = (<TwoButtons
        headerText="Add one and reset"
        firstHandler={function(cnt) {return cnt + 1}}
        firstText={"Add one"}
        secondHandler={function(cnt) {return 1}}
        secondText={"Reset"}
      />)
    }
    if(this.state.buttonDisplayed === 2) {
      twoButtons = (<TwoButtons
        headerText="Multiply by 2 and negate"
        firstText={"Multiply by 2"}
        firstHandler={function(cnt) {return cnt * 2}}
        secondText={"Negate"}  
        secondHandler={function(cnt) {return -cnt}}
      
      />)
    }
    if(this.state.buttonDisplayed === 3) {
      twoButtons = (<TwoButtons
        headerText="Random and subtract 10"
        firstText={"Random"}
        firstHandler={function(cnt) {return Math.floor(Math.random() * 100)}}
        secondText={"Subtract 10"}  
        secondHandler={function(cnt) {return cnt - 10}}
      />)
    }
   
    return (
      <div className="App">
        <button onClick={this.displayFirst}>first</button>
        <button onClick={this.displaySecond}>second</button>
        <button onClick={this.displayThird}>third</button>
        <div>
          {twoButtons}
        </div>
      </div>
    );
  }
}

export default App;
