import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide4.jpg'
import slide5 from '../../assets/slide5.jpg'
import Title from '../Share/Title';

const HomeSwiper = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <Title subHeading={'From 11.00 am to 10.00pm'} heading={'ORDER ONLINE'}></Title>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeSwiper;