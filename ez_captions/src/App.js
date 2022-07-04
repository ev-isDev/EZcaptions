import './App.css';
import Header from './containers/Header';
import React from 'react';
import Captions from './containers/Captions'
import { useState } from 'react'
import NewCaption from './containers/NewCaption';

const App = () => {
  const [captions, setCaptions] = useState([ // default starting "captions"
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
    
    const addCaption = (caption) => { // add a new caption and give it a random ID
      const id = Math.floor(Math.random() * 10000) + 1
      const newCaption = {id, ...caption}
      setCaptions([...captions, newCaption]) // update the captions list as the previous list AND the new caption
      //console.log(caption) //THIS WAS FOR DEBUGGING
    }

    const downloadCaptions = (captions) => {
      console.log('hello') // filler function
      // put download and generate code here
    }

    const deleteCaption = (id) => { // deletes caption
      //console.log(id) // THIS WAS FOR DEBUGGING
      setCaptions(captions.filter((caption) => caption.id !==
      id)) // filters by keeping all captions that aren't the deleted captions ID
    }

    return (
      <div className= 'container'>
        <Header onClick={downloadCaptions}/> {/* onClick for the download button! */}
        <NewCaption onAdd={addCaption}/> {/* submission form with onAdd prop for the submit button */}
        {captions.length > 0 ? // quick if statement for when there are no captions in the tool!
        <Captions captions={captions} onDelete={deleteCaption} /> :
        'No captions yet!'}
      </div>
    )
}

export default App;
