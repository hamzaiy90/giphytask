import React from 'react';

class DisplayRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: false
    }
  }

  componentDidMount() {
    let that = this;
    window.onscroll =  function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            that.setState({
              bottom: true
            })
          }
    }
  }
  componentWillUnmount() {
    window.onscroll = null;
    this.setState({
      bottom: false
    })
  }

  render() {
      if (!this.props.random) {
        return <h3 style={{color: 'white'}}>Loading...</h3>
      }
      if (this.props.random) {
        // console.log('broooo', this.props.random);
        console.log('Reached the bottom', this.state.bottom);

        return (
                  <div className="main-content">
                    {this.props.children}
                  </div>
               )
      }
  }
}

export default DisplayRandom;
