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
      SearchId: null,
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
      <Route path="/" render={(props) => <Homepage SearchId={this.state.SearchId} setPost={this.setPost}/>} exact/>
      <Route path="/:post_id" render={(props) => <Post SearchId={this.state.SearchId} postId={this.state.postId} />}/>
      </div>
    </BrowserRouter>
    {/*<Footer />*/}
    </div>
    );
  }
}

export default App;
