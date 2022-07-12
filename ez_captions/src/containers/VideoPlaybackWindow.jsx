import React, { useRef } from "react";
import "../App.css";

import video from "./assets/video.mp4";
import useVideoPlayer from "./hooks/useVideoPlayer";
import { BsPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs'
import { BsFillVolumeMuteFill } from 'react-icons/bs'
import { FaVolumeUp } from 'react-icons/fa'
import { AddPreviewCaption } from "./AddPreviewCaption";
import PrevCaptions from "./PrevCaptions";

const VideoPlaybackWindow = ({ savePrev }) => {
    
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
    } = useVideoPlayer(videoElement);
    
    return (
        <div className="container">
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
                    <AddPreviewCaption savePrev={savePrev}/>
                    
                </div>
            </div>
        </div>
    );
};

export default VideoPlaybackWindow;