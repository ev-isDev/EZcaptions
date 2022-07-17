import React from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import VideoPlaybackWindow from './VideoPlaybackWindow'
import video from "./assets/video.mp4";

const ImportVideo = () => {
    const [vid, setVid] = useState(video)
    const handleFile = e => {
        const file = e.target.files[0]
        setVid(URL.createObjectURL(file))
    }
    // <ReactPlayer url={vid} width="100%" height="100%" controls={true}/>
  return (
    <div>
        <VideoPlaybackWindow video={vid}/>
        <label>Import Your Own Video File! </label>
        <input type="file" accept=".mp4" onChange={handleFile}></input>
    </div>
  )
}

export default ImportVideo