import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MenuPage from "./components/MenuPage/MenuPage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    menuClicked: false
  };

  handleMenuClicked = () => {
    this.setState(prevState => {
      return { menuClicked: !prevState.menuClicked };
    });
  };

  render() {
    return (
      <>
        <Header
          handleMenuClicked={this.handleMenuClicked}
          menuClicked={this.state.menuClicked}
        />
        <Switch>
          <div className='App'>
            { this.state.menuClicked ? <MenuPage /> : null}
            {/* <MenuPage /> */}
          </div>
        </Switch>
      </>
    );
  }
}

export default App;
