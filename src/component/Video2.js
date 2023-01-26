import React from 'react';
import { FaPlay } from 'react-icons/fa'
import { video2 } from './allVideoes';


const Video2 = () => {
    return (
        <div>
            <p className={`absolute bg-white h-14 w-14 rounded-full top-96 left-72`}><FaPlay className='mx-auto mt-5' /></p>
            <video className={`h-screen w-full object-cover static cursor-pointer `} src={video2} controls typeof='video/mp4'></video>
        </div>
    );
};

export default Video2;