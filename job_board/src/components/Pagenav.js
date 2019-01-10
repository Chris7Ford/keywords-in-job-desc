import React from "react";

const Pagenav = (props) => {
    return (
			<div class="outer">
			<nav class="inner" aria-label="Page navigation">
  				<ul class="pagination">
                {props.page > 1 && <li class="page-item"><a class="page-link" onClick={props.prevPage} href="#top">Previous</a></li>}
    			{props.checkNext && <li class="page-item"><a class="page-link" onClick={props.nextPage} href="#top">Next</a></li>}
  				</ul>
			</nav>
			</div>
    )
}

export default Pagenav;