import React from 'react';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardsInfo/CardsInfo';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <CardsInfo />
            <Services/>
            <Treatment/>


        </div>
    );
};

export default Home;