import React from "react";
import { Link } from "react-router-dom";

class Searches extends React.Component {
    constructor(props){
        super();
        this.state = {
            loaded: false,
            terms: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8889/getSearches`)
		.then(res => res.json())
		.then(data => {
			this.setState({
				loaded: true,
				terms: data.data
			})
		});	
	}

    render() {
        if (this.state.loaded == false) {
            return(
                <p>Loading...</p>
            )
        }
        return (
            <main role="main" className="inner cover col-md-12">
                <h1 className="cover-heading col-md-12 text-center">Search Terms</h1>
                <p className="lead col-md-12 text-center">Please select a search term to filter restults:</p>
                <p className="lead col-md-12 text-center">
                  {this.state.terms.map(term => (
                  <div><Link to='/home' onClick={() => {this.props.setSearch_id(term.id)}} className="btn btn-lg btn-secondary">{term.job_desc} - {term.location}</Link><br /><br /></div>
                  ))}
                </p>
            </main>
        );
    }
}

export default Searches;