import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import ListSongs from './components/ListSongs';
import Footer from './components/Footer';
import {songs} from './context'
import Datasongs from './data-spotify/songs.json'
function App() {
  const [song, setSong] = useState(Datasongs[0])
  const handleSetSong = (idsongnew) =>{
    const song = Datasongs.find(song => song.id ===idsongnew)
    if(!song){
      setSong(Datasongs[0])
    }else {
      console.log(song.id);
      setSong(song)
    }
    
  }


  return (
    <div className="relative flex flex-col bg-black App">
      <songs.Provider value={{Datasongs,song,handleSetSong}}>
        <Navbar/>
      <div className='flex flex-row overflow-hidden bg-slate-700 custom-h-body'>
        <Detail/>
        <ListSongs/>
      </div>
      <Footer/>
      </songs.Provider>

      
    </div>
  );
}

export default App;