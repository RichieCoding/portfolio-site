import React, { Component } from "react";
import Header from "./components/Header/Header";
import MenuPage from "./Pages/MenuPage/MenuPage";
import { Switch, Route } from "react-router-dom";
import ProjectPage from "./Pages/Projects Page/ProjectPage";
import ShoppiePage from "./Pages/Shoppie-Page/ShoppiePage";
import ChelloPage from "./Pages/Chello-Page/ChelloPage"
import CritterPage from "./Pages/Critter-Page/CritterPage";
import OKupidPage from "./Pages/oKupid-Page/OKupidPage"

class App extends Component {
  state = {
    menuOpen: false
  };

  handleMenuOpen = () => {
    this.setState(prevState=> {
      return { menuOpen: !prevState.menuOpen}
    })
  }

  render() {
    return (
      <>
        <Header
          handleMenuClicked={this.handleMenuClicked}
          handleMenuOpen={this.handleMenuOpen}
          isOpen={this.state.menuOpen}
        />
        <Switch>
        { this.state.menuOpen ? <MenuPage menuClicked={this.handleMenuOpen}/> : null}   
        <Route exact path ='/projects' component={ProjectPage} />
        <Route exact path ='/' component={ProjectPage} />
        <Route exact path ='/projects/Shoppie' component={ShoppiePage} />
        <Route exact path ='/projects/Chello' component={ChelloPage} />
        <Route exact path ='/projects/Critter' component={CritterPage} />
        <Route exact path ='/projects/oKupid' component={OKupidPage} />
        </Switch>
      </>
    );
  }
}

export default App;
