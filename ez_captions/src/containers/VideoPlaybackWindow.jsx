import React, { useRef } from "react";
import "../App.css";

import useVideoPlayer from "./hooks/useVideoPlayer";
import { BsPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs'
import { BsFillVolumeMuteFill } from 'react-icons/bs'
import { FaVolumeUp } from 'react-icons/fa'


// import { AddPreviewCaption } from "./AddPreviewCaption";


const VideoPlaybackWindow = ({ video, captions}) => {
    
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

    function currentCaption(){
        if (videoElement.current !== null) {
            let currentTime = Math.floor(videoElement.current.currentTime);
            for (let i = 0; i < captions.length; i++) {
                let startTime = timestampStringToNum(captions[i].start);
                let endTime = timestampStringToNum(captions[i].end);
                if (currentTime >= startTime && currentTime <= endTime) {
                    return captions[i].text;
                }
            }
        }
        return "";
    }

    function timestampStringToNum(timestampString) {
        let timestampArr = timestampString.split(":");
        let hourBuffer = 0
        let hours = 0;
        if (timestampArr.length === 3) {
            hours = parseInt(timestampArr[0]);
            hourBuffer = 1
        }
        let minutes = parseInt(timestampArr[0 + hourBuffer]);
        let seconds = parseInt(timestampArr[1 + hourBuffer]);
        return hours * 3600 + minutes * 60 + seconds;
    }

    
    return (

        <div className="video-container">
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
                    <h3 style={{fontSize: '12px', color: 'white'}}>{handleTimeStamp()}</h3>
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
                            // <i className="bx bxs-volume-mute"></i>
                            <FaVolumeUp />
                        )}
                    </button>
                </div>
            </div>
            <div time>
                <h3 style={{fontSize: '15px', color: 'black'}}>{handleTimeStamp()}</h3>
                <h1 style={{fontSize: '20px', color: 'black', overflowWrap: 'break-word'}}>{currentCaption()}</h1>
            </div>
       </div>
    );
};

export default VideoPlaybackWindow;