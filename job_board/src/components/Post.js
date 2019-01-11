import React from "react";

class Post extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: window.location.href.split('/')[window.location.href.split('/').length-1],
            loaded: false,
            product: null
        }
    }

    

    componentDidMount() {
        if (/^\d+$/.test(this.state.id)) {
            fetch(`http://localhost:8889/getPost?id=${this.state.id}`)
		    .then(res => res.json())
		    .then(data => {
		    	this.setState({
		    		loaded: true,
                    product: data.data
		    	})
            });
        }
	}

    render() {

        if (!/^\d+$/.test(this.state.id)) {
            return (
                <p>
                    Invalid id
                </p>
            )
        }

        if (!this.state.loaded) {
            return (
                <p>Loading..</p>
            )
          }
        return (
            <div className="jumbotron">
                {this.state.product.map(info => (
                    <div>
                    <h1 className="display-4"><a href={info.url} target="BLANK">{info.title}</a></h1>
                    <h3>{info.company} - {info.location}</h3>
                    <p className="lead orange">{info.ez_apply}</p>
                    <p className="lead">{info.salary_text}</p>
                    <hr className="my-4" />
                    <p>{info.body}</p>
                    <br />
                    <br />
                    <br />
                    <p>Search term:<br />{info.job_desc} - {info.location}</p>
                    </div>
                    )
                )}
            </div>
        )};
}
export default Post;