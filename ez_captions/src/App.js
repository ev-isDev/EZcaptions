import './App.css';
import Header from './containers/Header';
import React from 'react';
import Captions from './containers/Captions'
import { useState } from 'react'
//import CaptionList from './containers/CaptionList';
//import Captions from './Captions.json';
//import TablePage from './containers/TablePage';

const App = () => {
  const [captions, setCaptions] = useState([
    {
        startTimeStamp: "23:12",
        endTimeStamp: "23:42",
        text: "this is the first caption"
    },
    {
        startTimeStamp:'28:08',
        endTimeStamp: "28:21",
        text: "this is the second caption"
    },
    {
        startTimeStamp: "32:52",
        endTimeStamp: "33:20",
        text: "this is the third caption"
    }
    ])


    return (
      <div className= 'container'>
        <Header />
        <Captions captions={captions}/>
      </div>
    )
}

export default App;
