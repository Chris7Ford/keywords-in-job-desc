import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.changeView = this.changeView.bind(this);

    this.state = {
    view: 'home'
    }
  }

  changeView = (currentView) => {
    this.setState({
      view: currentView
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
	  <Header action={this.changeView} />
        </header>
      </div>
    );
  }
}

const HeaderButton = (props) => {
  return (<button type="button" class="btn btn-primary">{props.name}</button>);
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <HeaderButton name="Home" onClick={this.props.action("Home")} />
        <HeaderButton name="Top Picks" />
        <HeaderButton name="Latest" />
      </div>
    )
  }
}

export default App;
