import React from 'react';

const SideForm = () => {
    return (
        <div className='w-fit mx-auto my-auto'> 
            <button className='h-14 w-[336px] font-semibold text-base rounded-full bg-gray-200 text-left pl-4 border hover:border-indigo-600 mb-4'>
                <span className='text-white text-sm bg-[#7d00fe] px-[9px] py-1 mr-2 rounded-full'>A</span>
                Campaign structure
            </button><br />
            <button className='h-14 w-[336px] font-semibold text-base rounded-full bg-gray-200 text-left pl-4 border hover:border-indigo-600 mb-4'>
                <span className='text-white text-sm bg-[#7d00fe] px-[9px] py-1 mr-2 rounded-full'>B</span>
                Learn Facebook basics
            </button><br />
            <button className='h-14 w-[336px] font-semibold text-base rounded-full bg-gray-200 text-left pl-4 border hover:border-indigo-600 mb-4'>
                <span className='text-white text-sm bg-[#7d00fe] px-[9px] py-1 mr-2 rounded-full'>C</span>
                3rd choice
            </button><br />
        </div>
    );
};

export default SideForm;