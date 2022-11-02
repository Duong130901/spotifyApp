import React, { useContext, useState, useEffect } from 'react';
import { songs } from '../context';


export default function ListSongs(props) {
    const [idsong,setIdsong] = useState(0)
    const {Datasongs, handleSetSong,song} = useContext(songs)
    const handleClickSong = function(idsongnew){
        setIdsong(idsongnew)
        handleSetSong(idsongnew)
    }
    useEffect(()=>{
        setIdsong(song.id)
    },[song])


    return (
        <div className='flex-[2] bg-slate-800 text-base overflow-y-scroll '>
            <table className='w-full table-auto'>
                <thead className='text-white'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody className='font-medium leading-10 cursor-pointer text-slate-500'>
                    {
                      Datasongs.map((song,key)=>{
                        return (   
                            <tr 
                                key={key} 
                                className={`hover:bg-slate-600 ${song.id===idsong? 'text-white bg-slate-600' : ""}`}
                                
                                onClick={()=>handleClickSong(song.id)}
                            >
                                <td className='w-[10%]'>{key+1}</td>
                                <td className='text-left'>{song.name}</td>
                                <td className='w-[10%]'>{song.author}</td>
                                <td className='w-[10%]'><i className='fa fa-download'></i></td>
                            </tr>
                        )
                      })  
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

