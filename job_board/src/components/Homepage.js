import React from "react";
import Jobcard from "./Jobcard";
import Pagenav from "./Pagenav";

class Homepage extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  posts: [],
		  page: 1,
		  loaded: false
		}
//		const { page, posts } = state;

		this.url_call = `http://localhost:8889/?page=${this.state.page}`;
		if (this.props.SearchId)
			  this.url_call += `&SearchId=${this.props.SearchId}`;
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
	}	

	componentDidMount() {
		this.get_posts();
	}

	get_posts = () => {
		fetch(this.url_call)
		.then(res => res.json())
		.then(data => {
			this.setState({
				loaded: true,
				posts: data
			})
		});
	}

	nextPage = () => {
		console.log(`State at the beginning of the function is ${this.state.page}`);
		this.setState({
			page: this.state.page + 1
		})
		setTimeout(function(){
			this.url_call = `http://localhost:8889/?page=${this.state.page}`;
			this.get_posts();
			console.log(`The state from the homepage component is ${this.state.page}`)
		}.bind(this), 300);

	}

	prevPage = () => {
		this.setState({
			page: this.state.page - 1
		});
		setTimeout(function(){
			this.url_call = `http://localhost:8889/?page=${this.state.page}`;
			this.get_posts();
			console.log(`The state from the homepage component is ${this.state.page}`)
		}.bind(this), 300);
	}

	render() {
	  if (!this.state.loaded) {
		return (
			<p>Loading..</p>
		)
	  }

	  else {
		return (
			<div class="container main">
			<a id = "top"></a>
			  <div class="row">
			  	{Object.values(this.state.posts.data).map(post => (
			  		<Jobcard Post={post} setPost={this.props.setPost}/>
			  	))}
			  </div>
			  	<Pagenav page={this.state.page} nextPage={this.nextPage} prevPage={this.prevPage} />
			</div>
		)
	  }
	}
}

export default Homepage;