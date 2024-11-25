import React from 'react';
import Bannar from '../../components/Bannar';
import HomeSwiper from './HomeSwiper';
import SectionBennar from '../Share/SectionBennar';
import RecommandSection from './RecommandSection';
import Perallux from './Perallux';
import Title from '../Share/Title';
import usemenu from '../../Hook/usemenu';

const Home = () => {
    const { menu } = usemenu()
    const popularMenu = menu.filter(item=> item.category === 'popular')
    return (
        <div>
            <Bannar></Bannar>
            <HomeSwiper></HomeSwiper>
            <div className='container mx-auto'>
                <SectionBennar bgImg={'/src/assets/banner2.jpg'} contant={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aperiam aut assumenda quae rem iste magni voluptatum delectus minus, dolor laudantium ab modi odio cupiditate, iusto natus quaerat repellendus error?'} Title={'Book now'} textColor={'text-white'}></SectionBennar>
            </div>
            <Title subHeading={'Check it out'} heading={'from our menu'}></Title>
            <RecommandSection menu={popularMenu}></RecommandSection>
            <Perallux></Perallux>
        </div>
    );
};

export default Home;