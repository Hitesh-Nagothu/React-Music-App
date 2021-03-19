import React, {useState} from 'react';
//Importting Styles
import './styles/app.scss';

//Adding components
import Player from './components/player';
import Song from './components/song';
import Library from './components/library'

//Import Utils
import data from "./util";

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong]= useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)


  return (
    <div className="App">
     <h1>Music Player</h1>
     <Song currentSong={currentSong}/>
     <Player 
     isPlaying={isPlaying}
     setIsPlaying={setIsPlaying}
     currentSong={currentSong}/>

    <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
