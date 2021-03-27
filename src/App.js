import React, {useState, useRef} from 'react';
//Importting Styles
import './styles/app.scss';

//Adding components
import Player from './components/player';
import Song from './components/song';
import Library from './components/library'

//Import Utils
import data from "./util";

function App() {

  //References
  const audioRef= useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong]= useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo]= useState({
    currentTime: 0,
    duration: 0,
});

const timeUpdateHandler= (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;

  setSongInfo({...songInfo, currentTime: current, duration: duration})

}


  return (
    <div className="App">
     <h1>Music Player</h1>
     <Song currentSong={currentSong}/>
     <Player 
     audioRef= {audioRef}
     isPlaying={isPlaying}
     setIsPlaying={setIsPlaying}
     currentSong={currentSong}
     setSongInfo={setSongInfo}
     songInfo={songInfo}/>

    <Library songs={songs} setCurrentSong={setCurrentSong}  audioRef={audioRef} isPlaying={isPlaying} />

    <audio onTimeUpdate={timeUpdateHandler} onLoadedDataCapture={timeUpdateHandler}  ref={audioRef} src={currentSong.audio}></audio>


    </div>
  );
}

export default App;
