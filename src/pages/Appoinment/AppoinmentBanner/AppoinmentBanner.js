import React from 'react';
import chair from '../../../assets/images/chair.png'


import { DayPicker } from 'react-day-picker';

const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {


   
  
    
  

    return (
        <header  className='my-6'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="  lg:w-1/2 rounded-lg shadow-2xl" alt='dentist chair' />
                    <div  className='mr-8' >
                        <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}

                        
                        />
                        
                        
                    </div>
                </div>
            </div>
        </header>

    );
};

export default AppoinmentBanner;