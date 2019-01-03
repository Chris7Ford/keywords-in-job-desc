import React from "react";

class Pagenav extends React.Component {

    constructor(props) {
        super(props);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    goToNextPage = () => {
        console.log("Checking next page");
        this.props.nextPage();
    }

    render() {
        if (this.props.page == 1) {
            return (
                <div class="outer">
	    		<nav class="inner" aria-label="Page navigation">
  	    			<ul class="pagination">
        			<li class="page-item"><a class="page-link" onClick={this.goToNextPage} Link="/">Next</a></li>
  	    			</ul>
	    		</nav>
	    		</div>
            )
        }
        else {
            return (
	        		<div class="outer">
	        		<nav class="inner" aria-label="Page navigation">
  	        			<ul class="pagination">
            			<li class="page-item"><a class="page-link" onClick={this.props.prevPage} href="#top">Previous</a></li>
            			<li class="page-item"><a class="page-link" onClick={this.props.nextPage} href="#top">Next</a></li>
  	        			</ul>
	        		</nav>
	        		</div>
            )
        }
    }
}

export default Pagenav;