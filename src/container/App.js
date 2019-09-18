import React, { Component } from 'react';
import Menu from '../components/Menu';
import DisplaySearch from '../components/DisplaySearch';
import DisplayRandom from '../components/DisplayRandom';
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
      show: 'trending',
      counter: 0
    }
  }

  componentDidMount() {
    this.fetchTrendingData()

    /*
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30`)
            .then(res => res.json())
            .then(data => {
              this.addToSession(data);
            })
            .catch((err) => console.log('Error', err))

    setTimeout(() => {
      sessionStorage.clear()
    }, 3600000)
     */
  }

  fetchTrendingData = () => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30`)
            .then(res => res.json())
            .then(data => {
              this.setState({
                trending: data
              })
            })
            .catch((err) => console.log('Error', err))
  }

  // addToSession = (data) => {
  //   let result;
  //   if (sessionStorage.getItem('data') === null) {
  //     result = [];
  //   } else {
  //     result = JSON.parse(sessionStorage.getItem('data'));
  //   }
  //   result.push(data);
	//   sessionStorage.setItem('data', JSON.stringify(result));
  // }

  fetchRandomData = () => {
    if (counter < 30) {
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
              .then(res => res.json())
              .then(data => this.setState({random: this.state.random.concat(data)}))
              .catch((err) => console.log('Error', err))
      counter += 1;
      this.fetchRandomData();
    } else {
      console.log('done');
    }
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
    if (this.state.searchInput !== '') {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=${apiKey}&limit=30`)
        .then(res => res.json())
        .then(data => this.setState({
          searchData: data
        }));
    } else {
      alert('Invalid search')
    }
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

  onTrending = () => {
    this.setState({
      show: 'trending'
    })
    this.fetchTrendingData()
  }

  render() {
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
    } else if (this.state.show === 'trending') {

      if (this.state.trending.data) {
        return (
          <div className="container">
          <Menu searchApi={this.searchApi} onRandom={this.onRandom} onTrending={this.onTrending} onInputChange={this.onInputChange}/>
          <div className="main-content">
            {
              this.state.trending.data.map((img, i) => {
                return <img style={{border:'20px solid ' + randomColor[Math.floor(Math.random() * 5)]}} key={i} src={img.images.original.url} alt="" />
              })
            }
          </div>
          </div>
        )
      } else {
        return (
          <div className="container">
          <Menu searchApi={this.searchApi} onRandom={this.onRandom} onTrending={this.onTrending} onInputChange={this.onInputChange}/>
          <h3>Loading...</h3>
          </div>
        )
      }
    }
  }
}

export default App;
