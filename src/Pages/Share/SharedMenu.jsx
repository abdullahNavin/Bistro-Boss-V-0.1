import React from 'react';

const SharedMenu = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div className='flex gap-2 items-center'>
            <div>
                <img style={{borderRadius:'0px 100% 100% 100%'}} className='w-[100px]' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl uppercase mb-2'>{name} -----------</h1>
                <p className='text-gray-500'>{recipe}</p>
            </div>
            <div className='flex justify-start items-start h-full'>
                <p className='text-[#bb8506]'>${price}</p>
            </div>
        </div>
    );
};

export default SharedMenu;