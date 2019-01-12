import React from "react";

class Suggest extends React.Component {

    constructor(props){
        super();
        this.state = {
            jobDesc: "",
            location: ""
        }
        this.updatejobDesc = this.updatejobDesc.bind(this);
        this.updateLoc = this.updateLoc.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }
    
    updatejobDesc = (e) => {
        console.log(this.state);
        this.setState({
          jobDesc: e.target.value
        })
        setTimeout(function(){
			console.log(this.state);
		}.bind(this), 300);
      }

    updateLoc = (e) => {
        console.log(this.state);
        this.setState({
          location: e.target.value
        })
        setTimeout(function(){
			console.log(this.state);
		}.bind(this), 300);
      }

      sendRequest = () => {
        fetch(`http://localhost:8889/insert_search?desc=${this.state.jobDesc.split(" ").join("_")}&loc=${this.state.location.split(" ").join("_")}`)
		.then(res => res.json())
		.then(data => {
			this.setState({
				loaded: true,
				posts: data.data
			})
		});
      }

    render() {
        return (
            <div className="sbody godown container center_div">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3>If you would like to see another search term tracked, please submit it below!</h3>
                    </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <input onChange={this.updatejobDesc} type="text" className="form-control col-md-12" placeholder="Job Description" />
                    </div>
                    <div className="col-md-12">
                      <input onChange={this.updateLoc} type="text" className="form-control col-md-12" placeholder="Location" />
                    </div>
                  </div>
                </form>
                <button onClick={this.sendRequest} className="btn btn-lg btn-primary text-center">Submit</button>
            </div>
        )
    }
}

export default Suggest;