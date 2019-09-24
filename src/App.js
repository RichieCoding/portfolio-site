import React, { Component } from "react";
import Header from "./components/Header/Header";
import MenuPage from "./components/MenuPage/MenuPage";
import { Switch, Route } from "react-router-dom";
import ProjectPage from "./Pages/Projects Page/ProjectPage";
import ShoppiePage from "./Pages/Shoppie-Page/ShoppiePage";
import ChelloPage from "./Pages/Chello-Page/ChelloPage"
import CritterPage from "./Pages/Critter-Page/CritterPage";

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
        <Route exact path ='/projects' component={ProjectPage} />
        <Route exact path ='/' component={ProjectPage} />
        <Route exact path ='/projects/Shoppie' component={ShoppiePage} />
        <Route exact path ='/projects/Chello' component={ChelloPage} />
        <Route exact path ='/projects/Critter' component={CritterPage} />
        </Switch>
      </>
    );
  }
}

export default App;
