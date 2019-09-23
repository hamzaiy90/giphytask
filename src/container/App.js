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
    this.check();
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
  	if (counter < 10) {
  		fetch(`https://api.giphy.com/v1/gifs/random?api_key=haCNw7hoMOlTH6jMatt4WMJvyFRmSuQ3`)
              .then(res => res.json())
              .then(data => {
                this.setState((prevState) => {
                  return {
                    random: prevState.random.concat(data)
                  }
                })
              })
              .catch((err) => console.log('Error', err))
  		counter += 1;
  		this.fetchRandomData()
       }
  }


  check = () => {
      let that = this;
      window.onscroll = function() {
        //window height without scrolling + the amount you have scrolled vertically is greater or equal to document body height
        if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
          if (that.state.show === 'random') {
          console.log('reached bottom');
          counter = 0;
          that.fetchRandomData();
          }
        }
      };
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
          searchData: data,
      }));
        document.querySelector('input[type="text"]').value = '';
    } else {
      alert('Invalid search')
    }
    this.setState({
      searchInput: '',
      searchData: []
    })
  }

  onInputChange = (e) => {
    this.setState({
      searchInput: e.target.value.toLowerCase()
    })
  }

  onTrending = () => {
    this.setState({
      show: 'trending'
    })
    counter = 0;
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
            <div className="main-content">
            {

                    this.state.random.map((img, i) => {
                      return <img style={{border:'20px solid ' + randomColor[Math.floor(Math.random() * 5)]}} key={i} src={img.data.images.original.url} alt='' />
                    })

            }
            </div>
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
