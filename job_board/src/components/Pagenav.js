import React from "react";

class Pagenav extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
	    		<div class="outer">
	    		<nav class="inner" aria-label="Page navigation">
  	    			<ul class="pagination">
                    {this.props.page > 1 && <li class="page-item"><a class="page-link" onClick={this.props.prevPage} href="#top">Previous</a></li>}
        			{this.props.checkNext && <li class="page-item"><a class="page-link" onClick={this.props.nextPage} href="#top">Next</a></li>}
  	    			</ul>
	    		</nav>
                <p>{this.props.next}</p>
	    		</div>
        )
    }
}

export default Pagenav;