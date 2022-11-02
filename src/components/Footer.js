import React, { useContext ,useRef} from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { songs } from '../context';

export default function Footer(props) {
    const {song,handleSetSong,Datasongs,cdThumbAnimate} = useContext(songs)
    
   
    const handleClickNext = ()=>{
         handleSetSong(song.id +1)
        
    }
    const handleClickPrev = ()=>{
       handleSetSong(song.id -1)
        
    }
    const handleEnded = ()=>{
        handleSetSong(song.id +1)
    }
    const handlePlay = ()=>{
        cdThumbAnimate.play()
    }
    const handlePause = ()=>{
        cdThumbAnimate.pause()

    }

    return (
        <div >
            <AudioPlayer 
                className='audio-player' 
                src={song.url}
                showSkipControls={true} 
                showJumpControls={false}
                onClickNext = {handleClickNext}
                onClickPrevious = {handleClickPrev}
                onEnded = {handleEnded}
                onPlay={handlePlay}
                onPause={handlePause}
            />
        </div>
    );
}

