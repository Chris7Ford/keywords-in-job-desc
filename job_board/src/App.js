import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import Post from "./components/Post";
import Searches from "./components/Searches";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Chartpage from "./components/Chartpage";
import Suggest from "./components/Suggest";

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      filter: {
        SearchId: null,
        sfig: false,
        ez_apply: false,
        keywordEnabled: false
      },
      keyword: "",
      postId: null
    }
    this.setPost = this.setPost.bind(this);
    this.toggleFilters.sfig = this.toggleFilters.sfig.bind(this);
    this.toggleFilters.ez_apply = this.toggleFilters.ez_apply.bind(this);
    this.setSearch_id = this.setSearch_id.bind(this);
    this.toggleFilters.updateKeyword = this.toggleFilters.updateKeyword.bind(this);
    this.toggleFilters.toggleKeywordEnabled = this.toggleFilters.toggleKeywordEnabled.bind(this);
    
  }

  setPost = (id) => {
		this.setState({
			postId: id
		})
  }

  setSearch_id = (id) => {
    this.setState(prevState => ({
      filter: {
      ...prevState.filter,
        SearchId: id
      }
    }))
  }

toggleFilters = {
  sfig: () => {
    this.setState(prevState => ({
      filter: {
      ...prevState.filter,
      sfig: !(this.state.filter.sfig)
      }
    }))
  },

  ez_apply: () => {
    this.setState(prevState => ({
      filter: {
      ...prevState.filter,
      ez_apply: !(this.state.filter.ez_apply)
      }
    }))
  },

  toggleKeywordEnabled: () => {
    this.setState(prevState => ({
      filter: {
      ...prevState.filter,
      keywordEnabled: !(this.state.filter.keywordEnabled)
      }
    }))
  },

  updateKeyword: (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
}

  render() {
    return (
    <div>
	  <BrowserRouter>
	  <div>
    <Header />
      <Route path="/jobs" render={(props) => <Homepage filter={this.state.filter} setPost={this.setPost} keyword={this.state.keyword}/>} exact/>
      <Route path="/" render={(props) => <Searches setSearch_id={this.setSearch_id} toggleFilters={this.toggleFilters} filter={this.state.filter} keyword={this.state.keyword} />} exact/>
      <Route path="/post/:post_id" render={(props) => <Post SearchId={this.state.SearchId} postId={this.state.postId} exact />}/>
      <Route path="/chart" render={(props) => <Chartpage SearchId={this.state.SearchId} exact />}/>
      <Route path="/suggest" component={Suggest} />
      </div>
    </BrowserRouter>
    <Footer />
    </div>
    );
  }
}

export default App;
