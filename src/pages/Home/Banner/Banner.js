import React from 'react';
import chair from '../../../assets/images/chair.png'
import backgroundImage from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="mb-5 ">
            <div style={{backgroundImage:`url(${backgroundImage})`}}  className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary  text-whi  bg-gradient-to-r from-primary to-secondary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;