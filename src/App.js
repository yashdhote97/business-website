import React, { Component } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Products from "./components/Products"
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/donations" component={Donate} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/product/:productid" component={Products} />
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
