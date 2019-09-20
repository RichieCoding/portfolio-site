import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MenuPage from "./components/MenuPage/MenuPage";
import { Switch, Route } from "react-router-dom";
import ProjectPage from "./Pages/Projects Page/ProjectPage";

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
        { this.state.menuClicked ? <MenuPage handleMenuClicked={this.handleMenuClicked} /> : null}
        <Route exact path='/projects' component={ProjectPage} />
          <div className='App'>
            
          </div> 
          
          
        </Switch>
      </>
    );
  }
}

export default App;
