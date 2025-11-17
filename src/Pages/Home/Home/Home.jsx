import React from 'react';
import Banner from './Banner/banner';
import HowitWorks from './HowitWorks';
import Services from '../Services/Services';
import BrandSwiper from './BrandSwiper';

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner/>
            <HowitWorks/>
            <Services/>
            <BrandSwiper/>
        </div>
    );
};

export default Home;