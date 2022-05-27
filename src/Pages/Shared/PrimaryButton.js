import React from 'react';

const PrimaryButton = ({ children }) => {


    return (
        <button className='bg-rose-800 text-gray-50 px-10 py-1 rounded-lg mt-4 hover:bg-rose-600'>{children}</button>
    );
};

export default PrimaryButton;