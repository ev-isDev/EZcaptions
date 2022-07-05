import './App.css';
import Header from './containers/Header';
import React from 'react';
import Captions from './containers/Captions'
import { useState } from 'react'
import NewCaption from './containers/NewCaption';
import SubmitFile from './containers/SubmitFile';

const App = () => {
  const [captions, setCaptions] = useState([
    // default starting "captions"
    {
        id: 1,
        start: "00:00",
        end: "00:03",
        text: "[Off-screen voice] Hello there!"
    },
    {
      id: 2,
        start: "00:07",
        end: "00:12",
        text: "I am talking to you right now,"
    },
    {
        id: 3,
        start: "00:12",
        end: "00:16",
        text: "on the internet!!"
    }
    ])
    
    const addCaption = (caption) => { // add a new caption and give it a random ID
        const id = Math.floor(Math.random() * 10000) + 1
        const newCaption = {id, ...caption}
        setCaptions([...captions, newCaption]) // update the captions list as the previous list AND the new caption
        //console.log(caption) //THIS WAS FOR DEBUGGING
      }

    const downloadCaptions = (captions) => {
        const text = captions.map((caption, counter) => `${counter + 1}\n00:${caption.start},000 --> 00:${caption.end},000\n${caption.text}\n\n`).join('');
        const blob = new Blob([text], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const elem = document.createElement('a');
        elem.href = url;
        elem.download = 'captions.srt';
        elem.click();
        URL.revokeObjectURL(url);
    }

    const deleteCaption = (id) => { // deletes caption
      //console.log(id) // THIS WAS FOR DEBUGGING
      setCaptions(captions.filter((caption) => caption.id !==
      id)) // filters by keeping all captions that aren't the deleted captions ID
    }

    return (

      <div className='container'>
        <Header onClick={() => downloadCaptions(captions)}>Download Captions</Header>
        <NewCaption onAdd={addCaption}/> {/* submission form with onAdd prop for the submit button */}
        {captions.length > 0 ? // quick if statement for when there are no captions in the tool!
        <Captions captions={captions} onDelete={deleteCaption} /> :
        'Please input caption info!'}
        <SubmitFile />
      </div>
    )
}

export default App;
