import React from "react";

class Post extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loaded: false,
            product: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8889/getPost?id=${this.props.postId}`)
		.then(res => res.json())
		.then(data => {
			this.setState({
				loaded: true,
				product: Object.values(data)
			})
        });
	}

    render() {
        return (
            <div class="jumbotron">
            <p>{Object.values(this.state.product)}</p>
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        )
    }
}
export default Post;