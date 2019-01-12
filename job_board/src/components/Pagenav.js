import React from "react";

const Pagenav = (props) => {
    return (
			<div className="outer">
			<nav className="inner" aria-label="Page navigation">
  				<ul className="pagination">
                {props.page > 1 && <li className="page-item"><a className="page-link" onClick={props.prevPage} href="#top">Previous</a></li>}
    			{props.checkNext && <li className="page-item"><a className="page-link" onClick={props.nextPage} href="#top">Next</a></li>}
  				</ul>
			</nav>
			</div>
    )
}

export default Pagenav;