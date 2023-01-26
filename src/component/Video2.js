import React from 'react';
import { FaPlay } from 'react-icons/fa'


const Video2 = () => {
    return (
        <div>
            <p className={`absolute bg-white h-14 w-14 rounded-full top-96 left-72`}><FaPlay className='mx-auto mt-5' /></p>
            <video className={`h-screen w-full object-cover static cursor-pointer `} src="https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY3NTI3MDQwNX0.ESPtlWe-UGTl-2IWIOx2e2sEpgSDb5gYD013JtmezdMGQJ64PE9rzsIm0tKErnQtEXpdoTu3rdgacowMZCrmyh8sYnz7rJj1yrjoqLd0iyFBNMxGEETXnfK2-RbMuUlPealDbGfkyuNshFWtvdY2MSFzFX0DsQvKcuHEhc8LF3w_a0eL4ABVabBJpnBFItf2uAVv1lTAd8g9n4St1XeV8ERFoSMuELXLNU1WDUachSwTRiYUE_-JH8UWNFMFY-n0vWXZ8f1kVFVG7qygQ7fsCgy-gLMRCakyWxIvP-55-t8eeJ4OysAaSNJFk9CccQ4o0AyNWduNI4O-6sn8lwGYUQu0u-udt0ndRA-H-JgoHf8Bl57E18jvo4x-GyQ2uC5QFRa4-m43quXxG-Nkyrvr_h-_hBadwddO1H40Fie96N4h9g5u_X7X86pwSD38iN0SPvhkskQjW66fmsaJ-Kvi5X1O6yDbw7Qszt5ycUpYmlNgfaIHovttow7pQT1nDNDhCbLevQB5qlEaPlg1yj9-yaYnp2ddhBBKgby1vc9wfVjK03Nctw-DQTbqVdkFjsRhne-28TAzL1K86wOXk6WNYLdHbwYyiD2B8ofVUGXSeEXzISIC59CMz9wLjH28tRxUG04UxckCJE0vvGwSvWj6lkmC3nRW6A1KW73GCZ4HBLk" controls typeof='video/mp4'></video>
        </div>
    );
};

export default Video2;