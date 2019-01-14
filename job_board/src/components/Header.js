import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  	  <div className="navbar-brand">Job Board</div>
  	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    	    <span className="navbar-toggler-icon"></span>
  	  </button>
  	  <div className="collapse navbar-collapse" id="navbarNav">
    	    <ul className="navbar-nav">
      	      <li onClick={this.props.toggleChartResetfnTrue} className="nav-item">
                <Link className="nav-link" to="/">Filters</Link>
              </li>
              <li onClick={this.props.toggleChartResetfnTrue} className="nav-item">
                <Link className="nav-link" to="/jobs">Jobs</Link>
              </li>
      	      <li onClick={this.props.toggleChartResetfnTrue} className="nav-item">
                <Link className="nav-link" to="/chart">Keyword Breakdown</Link>
              </li>
              <li onClick={this.props.toggleChartResetfnTrue} className="nav-item">
                <Link className="nav-link" to="/suggest">Suggest a Search Term</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;