import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import Post from "./components/Post";
import Searches from "./components/Searches";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      filter: {
        SearchId: null,
        sfig: null,
        ez_apply: null,
        keyword: null
      },
      postId: null
    }
    this.setPost = this.setPost.bind(this);
    this.setSearch_id = this.setSearch_id.bind(this);
  }

  setPost = (id) => {
		this.setState({
			postId: id
		})
  }

  setSearch_id = (id) => {
		this.setState({
			SearchId: id
		})
  }

  render() {
    return (
    <div>
	  <BrowserRouter>
	  <div>
    <Header />
      <Route path="/jobs" render={(props) => <Homepage filter={this.state.filter} setPost={this.setPost}/>} exact/>
      <Route path="/" render={(props) => <Searches setSearch_id={this.setSearch_id}/>} exact/>
      <Route path="/post/:post_id" render={(props) => <Post SearchId={this.state.SearchId} postId={this.state.postId} exact />}/>
      </div>
    </BrowserRouter>
    {/*<Footer />*/}
    </div>
    );
  }
}

export default App;
