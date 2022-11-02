import React, { useContext } from 'react';
import { songs } from '../context';

export default function Detail(props) {
    
    // const cdThumb = document.querySelector('.cdThumb')
    // console.log(cdThumb);
    const {song} = useContext(songs)

    // xu ly quay cd thumb
    // if (!cdThumb) {
        
    // }else{ 
    //     const cdThumbAnimate = cdThumb.animate(
    //         [
    //             {transform: 'rotate(360deg)'}
    //         ],{
    //             duration :1000,
    //             iterations : Infinity
    //         }
    //         );
    //         cdThumbAnimate.pause();
    //     }
   
    return (
        
        <div className='flex-1 mt-3 ml-3'>
            <div className='text-left title-detail'>
                <span className='font-bold text-cyan-500'>Now Playing :</span>
                <h2 className='text-2xl text-zinc-300'>{song.name}</h2>
            </div>
            <div  className='w-[220px] m-auto mt-16 h-[220px] overflow-hidden cdThumb rounded-full'>
                <img className='w-full' src={song.links.images[0].url} alt='avatar'/>
            </div>
            <div className='flex items-center mt-3 justify-evenly'>
                <img className='w-[80px] rounded-full max-h-[80px]' src={song.links.images[0].url} alt='avatar'/>
                <span className='text-xl text-white'>{song.author}</span>
            </div>
        </div>
        
       
    );

}


