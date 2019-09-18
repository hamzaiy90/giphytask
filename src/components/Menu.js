import React from 'react';
import './Menu.css';

const Menu = ({ onInputChange, searchApi, onRandom, onTrending }) => {
  return (
    <div className="menu-container">
      <div className="menu-1">
        <input onChange={onInputChange} type="text" placeholder="search giphies" />
        <button className="btn1" onClick={searchApi}>Search</button>
      </div>
      <div className="menu-2">
        <button className="btn2" onClick={onRandom}>Random</button>
        <button className="btn3" onClick={onTrending}>Trending</button>
      </div>
    </div>
  )
};

export default Menu;
