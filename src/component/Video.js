import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'


const Video = () => {

    const [manageHover, setHover] = useState(false);
    console.log(manageHover);
    return (
        <div>
            <p className={`absolute bg-white h-14 w-14 rounded-full top-96 left-72 `}><FaPlay className='mx-auto mt-5' /></p>
            <video className={`h-screen w-full object-cover static cursor-pointer `} src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY3NTI3MDQwNn0.kg_VswyYGF15hbOm1w1V2WqTMU0eYVHoEDV-BnhdUOkJJYrRkMJlWB6p2eOFYoTpde6W9altqf-X74rDoLRqwPNRw6A10WT6T8HPoiudZkGjk38K3K7jQmTOIFefpLmWjpW-YMpyS2MEIF00mmo8JDoWpUGA2x7yzC0KkXL1ye1kWVwcazC9xwBajybBbAlTqabUkMmjliUvR0YGP3Ev_yoebApAkz62-qZlmcq8ThMc2PrZaxm7kINof_PC13ZBUVm194KtgynjZArlNDw5-Y2G-lX5f8-8m0BzXfAw8Z9nCyhPSVhwlWTxI3saGWfHNjoPXcg3zdqsluQi34KWLbDBwKEDgMBFKwsDjsakup_sX9OXI0y7pWTQiUCCeCLmZdCrwqmmM5L_ZSVuB8F5-fbEcjRtrN24RnPNF1mx7sNNLNNdcvOmRd5Wzf5Xy7C-ufTehN2ueJfW2x5S4WQZSkCAMo5QhClFZjVcyKYpQ6FwzOjsMFXlVhzZSdFsYX_xNMnpEiblU8C95ef932IN2nx1qJP7YiHeylAiW1KynUMejx_ZwRbwlwNPTKjiNlEs6EZPcZYo2wsG1T-pcpDL4JvDjQMyOjwEp59BjUu_uw9OP_ymUqJq8W0MRyYdNGRVWxC13wQmcvCoUdiGfI1SbBe-l5FRUSw6H6Jrxy8_lDs" controls typeof='video/mp4'></video>
        </div>
    );
};

export default Video;