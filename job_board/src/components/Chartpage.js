import React from "react";
import { Bar } from "react-chartjs-2";

class ChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            loaded: false,
            keys: [],
            searchbox_count: 1,
            data_numbers: []
        }
        this.get_chart_data = this.get_chart_data.bind(this);
        this.createBoxes = this.createBoxes.bind(this);
        this.create_bar_chart = this.create_bar_chart.bind(this);
        this.modify_keys = this.modify_keys.bind(this);
        this.increment_sb_count = this.increment_sb_count.bind(this);
        this.reset_all = this.reset_all.bind(this);   
    }

    get_chart_data = () => {
        let temp = []
        for (let i = 0; i < this.state.keys.length; i++) {
            if (typeof(this.state.keys[i]) != "undefined") {
                temp.push(this.state.keys[i].split(" ")[0]);
            }
        }

        this.setState({
            data_numbers: [],
            keys: temp
        })

        for (let i = 0; i < temp.length; i++) {
            let chart_url = `http://localhost:8889/get_chart_numbers?key=${temp[i]}`
            if (this.props.filter.SearchId)
			    chart_url += `&SearchId=${this.props.filter.SearchId}`;
  		    if (this.props.filter.sfig)
	  	    	chart_url += `&sfig=true`;
  		    if (this.props.filter.ez_apply)
		    	  chart_url += `&ez=true`;
		    if (this.props.keyword !== "" && this.props.filter.keywordEnabled) {
		    	chart_url += `&keyword=${this.props.keyword}`;
		}
            fetch(chart_url)
		    .then(res => res.json())
		    .then(data => {
                this.setState({ 
                    data_numbers: [...this.state.data_numbers, data.data[0].count],
                    selected: true
                })
            });
        }
        setTimeout(function(){
            this.create_bar_chart();
		}.bind(this), 300);
    }

    reset_all = () => {
        this.setState({
            selected: false,
            loaded: false,
            keys: [],
            searchbox_count: 1,
            data_numbers: []
        })
    }

    createBoxes = (n) => {
        var elements = [];
        for(let i =0; i < n; i++){
            elements.push(
                <div key={i} className="form-group mx-sm-3 mb-2">
                <label for="inputkeyword" className="sr-only">Keyword</label>
                <input onChange={(e) => {this.modify_keys(e, i)}} type="text" className="form-control" placeholder="Keyword" />
              </div>
            );
        }
        return elements;
    }

    modify_keys = (e, i) => {
        let ckeys = this.state.keys;
        ckeys[i] = e.target.value
        this.setState({
            keys: ckeys
        })
    }
    
    increment_sb_count = () => {
        if (this.state.searchbox_count <= 9) {
            this.setState({
                searchbox_count: this.state.searchbox_count + 1
            })
        }
    }

    create_bar_chart = () => {
        this.setState({
            loaded: true
        })
        return(
            <div>
                <p>Does this come through or nah</p>
                
            </div>
        )
    }

    render() { 
        if (this.props.toggleChartReset) {
            this.reset_all();
            this.props.toggleChartResetfnFalse();
        }
        return(
            <div className="container sbody">
                <div className="row">
                    {!(this.state.loaded) &&
                        <div className="col-md-12">
                            <form className="form-inline">
                              {this.createBoxes(this.state.searchbox_count)}
                              <div onClick={this.increment_sb_count} className="btn btn-secondary mb-2">Add Another</div>
                              <div onClick={this.get_chart_data} className="btn btn-primary mb-2">Submit</div>
                            </form>
                        </div>
                    }
                    {this.state.loaded &&
                        <div className="col-md-12">
                            <div className="col-md-12">
                                <Bar data = 
                                {
                                    {
                                        labels: this.state.keys,
                                        datasets: [{
                                            label: "Number of posts with containing word",
                                            data: this.state.data_numbers,
                                            backgroundColor: "Navy"
                                        }]
                                    }
                                }
                                />
                            </div>
                            <div className="col-md-12">
                                <div onClick={this.reset_all} className="btn btn-secondary mb-2">Edit Search</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ChartPage;