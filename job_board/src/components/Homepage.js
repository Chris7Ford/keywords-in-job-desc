import React from "react";
import Jobcard from "./Jobcard";
import Pagenav from "./Pagenav";

class Homepage extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  posts: [],
		  page: 1,
		  loaded: false,
		  next: false
		}
		this.url_call = `http://localhost:8889/?page=${this.state.page}`;
		if (this.props.SearchId)
			  this.url_call += `&SearchId=${this.props.SearchId}`;
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
	}	

	componentDidMount() {
		this.get_posts();
		this.check_next_page();
	}

	get_posts = () => {
		fetch(this.url_call)
		.then(res => res.json())
		.then(data => {
			this.setState({
				loaded: true,
				posts: data.data
			})
		});
	}

	check_next_page= () => {
		this.next_url = `http://localhost:8889/?page=${this.state.page + 1}`;
		if (this.props.SearchId)
			  this.next_url += `&SearchId=${this.props.SearchId}`
		fetch(this.next_url)
		.then(res => res.json())
		.then(data => {
			if (data.data.length > 0) {
				this.setState({
					next: true
				})
			}
		});
	}

	nextPage = () => {
		this.setState({
			page: this.state.page + 1
		})
		setTimeout(function(){
			this.url_call = `http://localhost:8889/?page=${this.state.page}`;
			this.get_posts();
		}.bind(this), 300);

	}

	prevPage = () => {
		this.setState({
			page: this.state.page - 1
		});
		setTimeout(function(){
			this.url_call = `http://localhost:8889/?page=${this.state.page}`;
			this.get_posts();
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
			  	{this.state.posts.map(post => (
			  		<Jobcard Post={post} setPost={this.props.setPost}/>
			  	))}
			  </div>
			  	<Pagenav page={this.state.page} nextPage={this.nextPage} prevPage={this.prevPage} checkNext={this.state.next} />
			</div>
		)
	  }
	}
}

export default Homepage;