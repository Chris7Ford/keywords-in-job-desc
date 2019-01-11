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
		this.appendURL();
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.appendURL = this.appendURL.bind(this);
	}	

	componentDidMount() {
		this.get_posts();
		this.check_next_page();
	}

	appendURL = () => {
		if (this.props.filter.SearchId)
			this.url_call += `&SearchId=${this.props.filter.SearchId}`;
  		if (this.props.filter.sfig)
	  		this.url_call += `&sfig=true`;
  		if (this.props.filter.ez_apply)
			  this.url_call += `&ez=true`;
		/*if (this.props.filter.keyword)
			this.url_call += `&SearchId=${this.props.filter.SearchId}`;*/
	}

	get_posts = () => {
		console.log(this.url_call);
		fetch(this.url_call)
		.then(res => res.json())
		.then(data => {
			this.setState({
				loaded: true,
				posts: data.data
			})
		});
	}

	check_next_page = () => {
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
			} else {
				this.setState({
					next: false
				})
			}
		});;
	}

	nextPage = () => {
		this.setState({
			page: this.state.page + 1
		})
		setTimeout(function(){
			this.check_next_page();
			this.url_call = `http://localhost:8889/?page=${this.state.page}`;
			this.get_posts();
		}.bind(this), 300);

	}

	prevPage = () => {
		this.setState({
			page: this.state.page - 1
		});
		setTimeout(function(){
			this.check_next_page();
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