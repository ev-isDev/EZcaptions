import './App.css';
import Header from './containers/Header';
import React from 'react';
import Captions from './containers/Captions'
import { useState } from 'react'
import NewCaption from './containers/NewCaption';
//import CaptionList from './containers/CaptionList';
//import Captions from './Captions.json';
//import TablePage from './containers/TablePage';

const App = () => {
  const [captions, setCaptions] = useState([
    {
        id: 1,
        start: "23:12",
        end: "23:42",
        text: "this is the first caption"
    },
    {
      id: 2,
        start:'22:14',
        end: "28:21",
        text: "this is the second caption"
    },
    {
        id: 3,
        start: "32:52",
        end: "33:20",
        text: "this is the third caption"
    }
    ])
    
    const addCaption = (caption) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newCaption = {id, ...caption}
      setCaptions([...captions, newCaption])
      console.log(caption)
    }

    const downloadCaptions = (captions) => {
      console.log('hello')
    }

    const deleteCaption = (id) => {
      console.log(id)
      setCaptions(captions.filter((caption) => caption.id !==
      id))
    }

    return (
      <div className= 'container'>
        <Header onClick={downloadCaptions}/>
        <NewCaption onAdd={addCaption}/>
        {captions.length > 0 ?
        <Captions captions={captions} onDelete={deleteCaption} /> :
        'No captions yet!'}
      </div>
    )
}

export default App;
