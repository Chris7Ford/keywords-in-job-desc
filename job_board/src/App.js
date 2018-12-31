import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    view: 'home'
    }
  }

  render() {
    return (
    <div>
	  <BrowserRouter>
	  <div>
    <Header />
	  <p onClick={() => this.setState({view: "Changed"})}>
      Change
    </p>
    <p>
	    {this.state.view}
	  </p>

      <Route path="/" component={Homepage} exact/>
      </div>
    </BrowserRouter>
    <Footer />
    </div>
    );
  }
}

export default App;
