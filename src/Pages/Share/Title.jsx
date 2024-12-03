import React from 'react';

const Title = ({ subHeading, heading, my }) => {
    return (
        <div className={`${my ? 'my-0' : 'my-8'} mb-10 flex flex-col items-center `}>
            <p className='text-[#d99904] mb-3'>---{subHeading}---</p>
            <h1 className='border-y-[3px] uppercase font-semibold text-3xl py-3 px-10'>{heading}</h1>
        </div>
    );
};

export default Title;