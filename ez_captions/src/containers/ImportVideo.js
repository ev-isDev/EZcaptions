import React from 'react'
import { useState } from 'react'
import VideoPlaybackWindow from './VideoPlaybackWindow'
import video from "./assets/Demo.mp4";

const ImportVideo = ({capList}) => {
    const [vid, setVid] = useState(video)
    const handleFile = e => {
        const file = e.target.files[0]
        setVid(URL.createObjectURL(file))
    }
    // <ReactPlayer url={vid} width="100%" height="100%" controls={true}/>
  return (
    <div>
        <VideoPlaybackWindow video={vid} captions={capList}/>
        <div style={{height: "20px"}}></div>
        <label>Import your Video File: </label>
        <input type="file" accept=".mp4" onChange={handleFile}></input>
    </div>
  )
}

export default ImportVideo