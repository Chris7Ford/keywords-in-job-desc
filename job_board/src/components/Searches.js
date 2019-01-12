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
        if (this.state.loaded === false) {
            return(
                <p>Loading...</p>
            )
        }
        return (
            <div className="row sbody">
                <div className="col-md-3 search-left text-justify">
                  <h1 className="cover-heading col-md-12 text-center">Optional Filters</h1>
                <div className="form-check">
                    {!(this.props.filter.sfig) && <input onChange={this.props.toggleFilters.sfig} className="form-check-input" type="checkbox" value="" id="defaultCheck1" />}
                    {this.props.filter.sfig && <input checked onChange={this.props.toggleFilters.sfig} className="form-check-input" type="checkbox" value="" id="defaultCheck1" />}
                  <label className="form-check-label" for="defaultCheck1">
                    6 Figure Jobs
                  </label>
                  <br />
                    {!(this.props.filter.ez_apply) && <input onChange={this.props.toggleFilters.ez_apply} className="form-check-input" type="checkbox" value="" id="defaultCheck2" />}
                    {this.props.filter.ez_apply && <input checked onChange={this.props.toggleFilters.ez_apply} className="form-check-input" type="checkbox" value="" id="defaultCheck2" />}
                    <label className="form-check-label" for="defaultCheck1">
                    Easily Apply
                  </label>
                  <br />
                  {!(this.props.filter.keywordEnabled) && <input onChange={this.props.toggleFilters.toggleKeywordEnabled} className="form-check-input" type="checkbox" value="" id="defaultCheck3" />}
                  {this.props.filter.keywordEnabled && <input checked onChange={this.props.toggleFilters.toggleKeywordEnabled} className="form-check-input" type="checkbox" value="" id="defaultCheck3" />}
                  <label className="form-check-label" for="defaultCheck1">
                    Jobs containing the word:
                    <input id="keywordField" type="text" onChange={this.props.toggleFilters.updateKeyword} className="form-control" value={this.props.keyword}></input>
                  </label>
                  </div>
                </div>
                <div className="col-md-9">
                    <h1 className="cover-heading col-md-12 text-center">Search Terms</h1>
                    <p className="lead col-md-12 text-center">Please select a search term to filter restults:</p>
                    <div className="lead col-md-12 text-center">
                        {this.state.terms.map(term => (
                            <div key={term.id}><Link to='/jobs' onClick={() => {this.props.setSearch_id(term.id)}} className="btn btn-lg btn-primary">{term.job_desc} - {term.location}</Link><br /><br /></div>
                        ))}
                        <div><Link to='/jobs' onClick={() => {this.props.setSearch_id(null)}} className="btn btn-lg btn-primary">See All</Link><br /><br /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searches;