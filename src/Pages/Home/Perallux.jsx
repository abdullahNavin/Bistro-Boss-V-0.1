import React from 'react';
import Title from '../Share/Title';

const Perallux = () => {
    return (
        <div className='bg-[url(/src/assets/featured.jpg)] mt-16 bg-cover bg-fixed'>
            <div className='bg-[#00000082] h-full pt-5'>
                <Title subHeading={'Check it out'} heading={'from out menu'}></Title>
                <div className='flex items-center gap-6 px-32 pb-16'>
                    <img className='w-[30%]' src="/src/assets/featured.jpg" alt="" />
                    <div className='text-white'>
                        <h1 className='text-xl'>March 20, 2023</h1>
                        <h1 className='uppercase text-xl mb-2'>where i can get some?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea necessitatibus amet aliquid rem enim fugiat sapiente fugit magni expedita consectetur, laboriosam sunt voluptatem consequuntur totam itaque accusantium ipsam sint. Quam.</p>
                        <button className='mt-4 border-b-2 rounded-lg p-1'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perallux;