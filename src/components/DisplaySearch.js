import React from 'react';

const DisplaySearch = ({ searchdata, randomColor }) => {
  if (searchdata.data) {
    const searchArray = searchdata.data.map((img, i) => {
      return <img style={{border:'20px solid ' + randomColor[Math.floor(Math.random() * 5)]}} key={i} src={img.images.original.url} alt="" />
    })
    return (
      <div className="main-content">
        {searchArray}
      </div>
    )
  }
  return <p>Make a search :)</p>
}

export default DisplaySearch;
