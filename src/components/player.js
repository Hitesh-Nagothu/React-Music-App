import React, {useState} from "react";
//import {fontAwesomeIcon} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";


const Player = ({setSongInfo, songInfo, audioRef,currentSong, isPlaying, setIsPlaying}) => {
    
    //Evetn Handlers
    const playSongHandler= () => {

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }

    };

   

    const dragHandler = (e) => {
        
        audioRef.current.currentTime=e.target.value;
        setSongInfo({...songInfo, currentTime:e.target.value});

    }

  

    const getTime = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    return (
        <div className="player-container">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range">

                </input>

                <p>{getTime(songInfo.duration)}</p>
                
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skipBack" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x"  icon={!isPlaying ? faPlay: faPause} />
                <FontAwesomeIcon className="skipForward" size="2x"  icon={faAngleRight} />

            </div>
           
        </div>
    )
}

export default Player;
