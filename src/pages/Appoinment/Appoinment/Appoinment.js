import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';


const Appoinment = () => {

    const [selectedDate,setSelectedDate]=useState(new Date())

    return (
        <>
          <AppoinmentBanner selectedDate={selectedDate}  setSelectedDate={setSelectedDate}  />
          <AvailableAppoinment  selectedDate={selectedDate} />
            
        </>
    );
};

export default Appoinment;