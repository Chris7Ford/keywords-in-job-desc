import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  	  <a className="navbar-brand">Job Board</a>
  	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    	    <span className="navbar-toggler-icon"></span>
  	  </button>
  	  <div className="collapse navbar-collapse" id="navbarNav">
    	    <ul className="navbar-nav">
      	      <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jobs">Jobs</Link>
              </li>
              <li className="nav-item">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filters
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    6 Figure Jobs
                  </label>
                  <br />
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Easily Apply
                  </label>
                  <br />
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Jobs containing the word:
                    <input type="text" class="form-control" placeholder="Job Keyword"></input>
                  </label>
                  </div>
                </div>
            </div>
              </li>
      	      <li className="nav-item">
                <Link className="nav-link" to="/keywords">Keyword Breakdown</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/suggest">Suggest a Search Term</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;