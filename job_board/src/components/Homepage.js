import React from "react";
import Jobcard from "./Jobcard";

class Homepage extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  posts: [],
		  page: 0,
		  loaded: false
		}
//		const { page, posts } = state;

		this.url_call = `http://localhost:8889/?page=&${this.state.page}`;
		if (this.props.SearchId)
			  this.url_call += `&SearchId=${this.props.SearchId}`;
		this.nextPage = this.nextPage.bind(this);
	}	

	componentDidMount() {
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
		this.setState({
			page: this.state.page + 1
		})
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
			<div class="row">
			<p>{this.state.page}</p>
				{Object.values(this.state.posts.data).map(post => (
					<Jobcard Post={post}/>
				))}
			</div>

			<div class="outer">
			<nav class="inner" aria-label="Page navigation">
  				<ul class="pagination">
    			<li class="page-item"><a class="page-link" >Previous</a></li>
    			<li class="page-item"><a class="page-link" onClick={this.nextPage} Link="/">Next</a></li>
  				</ul>
			</nav>
			</div>
			</div>
		)
	  }
	}
}

export default Homepage;