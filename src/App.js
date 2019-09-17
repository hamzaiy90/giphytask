import React, { Component } from 'react';
import Menu from './Menu';
import DisplaySearch from './DisplaySearch';
import './App.css';

let apiKey = process.env.REACT_APP_MY_API_KEY;

const randomColor = [
  'rgb(199, 193, 40)',
  'rgb(222, 63, 63)',
  'rgba(190, 117, 240, 0.88)',
  'rgb(207, 115, 49)',
  'rgb(54, 153, 61)'
];

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

  onInputChange = (e) => {
    this.setState({
      searchInput: e.target.value.toLowerCase()
    })
  }

  render() {

    console.log(this.state.searchData);
    if (this.state.show == 'search') {
      return (
        <div className="container">
          <Menu searchApi={this.searchApi} onInputChange={this.onInputChange}/>
          <DisplaySearch randomColor={randomColor} searchdata={this.state.searchData} />
        </div>
      )
    }
  }
}

export default App;
