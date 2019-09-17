import React, { Component } from 'react';
import Menu from './Menu';
import './App.css';

let apiKey = process.env.REACT_APP_MY_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: [],
      searchData: [],
      searchInput: '',
      trending: [],
      show: 'search',
      counter: 0
    }
  }

  searchApi = () => {
    this.setState({
      show: 'search'
    })
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=${apiKey}&limit=30`)
        .then(res => res.json())
        .then(data => this.setState({
          searchData: data
    }));
  }

  render() {

    console.log(this.state.searchData);
    if (this.state.show == 'search') {
      return (
        <div className="container">
          <Menu searchApi={this.searchApi} />
          <h1>should display searched data</h1>
        </div>
      )
    }
  }
}

export default App;
