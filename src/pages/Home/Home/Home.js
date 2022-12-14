import React from 'react';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardsInfo/CardsInfo';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testomonial/Testimonial';
import Treatment from '../Treatment/Treatment';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <CardsInfo />
            <Services />
            <Treatment />
            <MakeAppoinment />
            <Testimonial/>


        </div>
    );
};

export default Home;