import React from "react";
import { Link } from "react-router-dom";

const Jobcard = (props) => {
    if (props.Post.salary_text == 0)
      props.Post.salary_text = "";
    if (props.Post.ez_apply == 0)
      props.Post.ez_apply = "";

    return (
      <div className="card col-md-4 col-sm-6">
  
      <div className="card-body">
  
        <h4 className="card-title">{props.Post.title}</h4>
        <h5>{props.Post.company}</h5>
        <h6>{props.Post.location}</h6>
        {props.Post.salary_text ? (<h6>{props.Post.salary_text}</h6>) : ("")}
        <p className="card-text">{props.Post.preview}</p>
        <br />
        
        <div className="card-button">
        <p className="orange">{props.Post.ez_apply}</p>
        <Link to="post"><button type="button" className="btn btn-primary">Read   more</button></Link>
        </div>
  
      </div>
    </div>   
    );
}

export default Jobcard;