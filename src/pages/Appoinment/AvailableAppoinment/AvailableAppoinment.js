import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({ selectedDate }) => {

    const [appoinmentOptions, setAppoinmentOptions] = useState([])
    const [treatment, setTreatment] = useState({})


    useEffect(() => {
        fetch('appoinmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))

    }, [])


    return (
        <section className='my-16' >
            <p className='text-center text-secondary text-xl font-bold ' >
                Available Appointments on {format(selectedDate, 'PP')}
            </p>

            <div className=' grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6  mt-6 '>
                {
                    appoinmentOptions.map(option => <AppoinmentOption
                        setTreatment={setTreatment} option={option} key={option._id} />)
                }

            </div>
            {
                treatment && <BookingModal  setTreatment={setTreatment}  selectedDate={selectedDate} treatment={treatment} />
            }


        </section>
    );
};

export default AvailableAppoinment;