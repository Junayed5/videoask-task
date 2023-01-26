import React from 'react';
import SideForm from './sideForm';
import Video from './Video';

const Section1 = ({setNext}) => {
    return (
        <div  className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <Video />
            <SideForm setNext={setNext}/>
        </div>
    );
};

export default Section1;