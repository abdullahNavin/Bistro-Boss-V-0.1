
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Bannar = () => {
    return (
        <div className='mb-20'>
            <Carousel showArrows={true} ariaLabel='center'>
                <div><img src="/src/assets/01.jpg" alt="" /></div>
                <div><img src="/src/assets/02.jpg" alt="" /></div>
                <div><img src="/src/assets/03.png" alt="" /></div>
                <div><img src="/src/assets/04.jpg" alt="" /></div>
                <div><img src="/src/assets/05.png" alt="" /></div>
                <div><img src="/src/assets/06.png" alt="" /></div>
            </Carousel>
        </div>
    );
};

export default Bannar;