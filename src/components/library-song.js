import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const librarysong = ({song, songs, setCurrentSong, id, audioRef, isPlaying}) => {

    const songSelectHandler = () => {
     //   const selectedSong = songs.filter((state)=> state.id===id)
     //   console.group(selectedSong);
        setCurrentSong(song);
        if(isPlaying){
            const playAction= audioRef.current.play();
            if (playAction !== undefined){
                playAction.then((audio)=>{
                    audioRef.current.play();
                })
            }
        }

    }

    return (
        <div onClick={songSelectHandler} className="library-song">
        <img src= {song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default librarysong;
