import React from 'react';
/* Add any imports you think you might need here! */
import {useState} from 'react';
import Color from './Color.js';
import './Block.css';
import './App.css';

const Menu = () => { 

    return (
      <div className="colorOptions">
        <div id="redBlock"></div>
        <div id="orangeBlock"></div>
        <div id="greenBlock"></div>
          {
            props.Color(useState(onClick()).name).setState(Profile)
          }
      </div>
    );
}

export default Menu;