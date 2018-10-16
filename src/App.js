import React, { Component } from 'react';
import './App.css';


class TwoButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
    // (possibly) code needede here
  }
  render() {
    // code needed here
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
      // code needed here
    }
    if(this.state.buttonDisplayed === 3) {
      // code needed here
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
