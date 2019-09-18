import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'


class App extends Component {
  state = {
    menuClicked: false
  }

  handleMenuClicked = () => {
    this.setState((prevState) => {
      return {menuClicked: !prevState.menuClicked}
    })
  }

  render(){
    return (
      <div className="App">
        <Header handleMenuClicked={this.handleMenuClicked} menuClicked={this.state.menuClicked} />
      </div>
    );
  }
  
}

export default App;
