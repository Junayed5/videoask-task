import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'
import { video2 } from './allVideoes';


const Video2 = () => {

    const [play, setPlay] = useState(true)

    return (
        <div>
            {
                play === false ? "" :
            <p className={`absolute bg-white h-14 w-14 rounded-full top-96 left-72`}><FaPlay className='mx-auto mt-5' /></p>
            }
            <video onClick={() => setPlay(false)} className={`h-screen w-full object-cover static cursor-pointer `} src={video2} autoPlay controls typeof='video/mp4'></video>
        </div>
    );
};

export default Video2;