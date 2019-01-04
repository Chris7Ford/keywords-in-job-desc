import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import Post from "./components/Post"
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      SearchId: null
    }
  }

  render() {
    return (
    <div>
	  <BrowserRouter>
	  <div>
    <Header />
      <Route path="/" render={(props) => <Homepage SearchId={this.state.SearchId} />} exact/>
      <Route path="/post" render={(props) => <Post SearchId={this.state.SearchId} />} exact/>
      </div>
    </BrowserRouter>
    {/*<Footer />*/}
    </div>
    );
  }
}

export default App;
