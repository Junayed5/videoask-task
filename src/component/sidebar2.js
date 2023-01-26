import React, { useState } from 'react';
import Form from './Form';

const Sidebar2 = () => {

    const [showForm, setForm] = useState(false);

    return (
        <div>
            {showForm ? <Form /> :
                <div className='w-fit mx-auto mt-96'>
                    <button onClick={() => setForm(true)} className='h-20 w-72 font-bold text-center text-base text-white rounded-3xl bg-indigo-600 pl-4 px-5 mb-4 '>
                        Download "Campaign structure Guide"
                    </button><br />
                </div>
            }
        </div>
    );
};

export default Sidebar2;