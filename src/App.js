import React, { Component } from 'react';
import Menu from './Menu';
import DisplaySearch from './DisplaySearch';
import DisplayRandom from './DisplayRandom';
import './App.css';

let apiKey = process.env.REACT_APP_MY_API_KEY;
let counter = 0;

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

  fetchRandomData = () => {
    if (counter < 30) {
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
              .then(res => res.json())
              .then(data => this.setState({random: this.state.random.concat(data)}))
              .catch((err) => console.log('Error', err))
      counter += 1;
      this.fetchRandomData();
    }

    console.log('done');
  }

  onRandom = () => {
    this.setState({
      show: 'random',
      random: []
    })
    counter = 0;
    this.fetchRandomData()
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

  onRandom = () => {
    this.setState((prevState) =>
    {
      return {
      show: 'random',
      random: []
      }
    })
    counter = 0;
    this.fetchRandomData()
  }

  render() {

    console.log(this.state.searchData);
    if (this.state.show === 'search') {
      return (
        <div className="container">
          <Menu searchApi={this.searchApi} onRandom={this.onRandom} onTrending={this.onTrending} onInputChange={this.onInputChange}/>
          <DisplaySearch randomColor={randomColor} searchdata={this.state.searchData} />
        </div>
      )
    } else if (this.state.show === 'random') {
      return (
          <div className="container">
            <Menu searchApi={this.searchApi} onRandom={this.onRandom} onTrending={this.onTrending} onInputChange={this.onInputChange}/>
            <DisplayRandom random={this.state.random} fetchRandom={this.fetchRandomData}>
            {

                    this.state.random.map((img, i) => {
                      return <img style={{border:'20px solid ' + randomColor[Math.floor(Math.random() * 5)]}} key={i} src={img.data.images.original.url} alt='' />
                    })

            }
            </DisplayRandom>
          </div>
      )
    }
  }
}

export default App;
