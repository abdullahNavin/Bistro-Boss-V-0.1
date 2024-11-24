import React from 'react';
import Bannar from '../../components/Bannar';
import HomeSwiper from './HomeSwiper';
import SectionBennar from '../Share/SectionBennar';
import RecommandSection from './RecommandSection';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <HomeSwiper></HomeSwiper>
            <div className='container mx-auto'>
                <SectionBennar bgImg={'/src/assets/banner2.jpg'} contant={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aperiam aut assumenda quae rem iste magni voluptatum delectus minus, dolor laudantium ab modi odio cupiditate, iusto natus quaerat repellendus error?'} bgColor={'bg-[#000000c2]'} textColor={'text-white'}></SectionBennar>
            </div>
            <RecommandSection></RecommandSection>
        </div>
    );
};

export default Home;