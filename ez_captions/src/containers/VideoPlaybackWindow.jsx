import React, { useRef } from "react";
import "../App.css";

import video from "./assets/video.mp4";
import useVideoPlayer from "./hooks/useVideoPlayer";
import { BsPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs'
import { BsFillVolumeMuteFill } from 'react-icons/bs'
import { FaVolumeUp } from 'react-icons/fa'

import ReactPlayer from 'react-player/youtube'
import InputURL from "./InputURL";


// import { AddPreviewCaption } from "./AddPreviewCaption";


const VideoPlaybackWindow = ({ savePrev, onAdd }) => {
    
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
    } = useVideoPlayer(videoElement);

    // function to add current timestamp to page
    function handleTimeStamp() {
        if (videoElement.current !== null) {
            let currentTime = videoElement.current.currentTime;
            currentTime = Math.floor(currentTime);
            let hours = Math.floor(currentTime / 3600);
            let minutes = Math.floor(currentTime / 60);
            let seconds = currentTime - minutes * 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            hours = ""
            if (hours < 10 && hours > 0) {
                hours = "0" + hours + ":";
            }
            return hours + minutes + ":" + seconds;
        }
        return "00:00";
    };
    
    return (

        
            <div className="video-wrapper">
                
                <video
                    src={video}
                    ref={videoElement}
                    onTimeUpdate={handleOnTimeUpdate}
                />
                <div className="controls">
                    <div className="actions">
                        <button onClick={togglePlay}>
                            {!playerState.isPlaying ? (
                                // <i className="bx bx-play">play</i>
                                <BsPlayFill/>
                            ) : (
                                // <i className="bx bx-pause">pause</i>
                                <BsPauseFill/>
                            )}
                        </button>
                    </div>
                    <h1>{handleTimeStamp()}</h1>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={playerState.progress}
                        onChange={(e) => handleVideoProgress(e)}
                    />
                    <select
                        className="velocity"
                        value={playerState.speed}
                        onChange={(e) => handleVideoSpeed(e)}
                    >
                        <option value="0.50">0.50x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="2">2x</option>
                    </select>
                    <button className="mute-btn" onClick={toggleMute}>
                        {!playerState.isMuted ? (
                            // <i className="bx bxs-volume-full"></i>
                            <BsFillVolumeMuteFill/>
                        ) : (
                            //<i className="bx bxs-volume-mute"></i>
                            <FaVolumeUp />
                        )}
                    </button>

                </div>
            </div>
       
    );
};

export default VideoPlaybackWindow;