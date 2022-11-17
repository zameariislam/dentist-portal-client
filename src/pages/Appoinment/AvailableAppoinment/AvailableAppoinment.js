import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from './AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppoinment = ({ selectedDate }) => {

    // const [appoinmentOptions, setAppoinmentOptions] = useState([])
    const [treatment, setTreatment] = useState({})
    const date = format(selectedDate, 'PP')
    console.log(date)
    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appoinmentOptions', date],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinmentOptions?date=${date}`)
            const data = await res.json()


            return data

        }


    })
    

    if(isLoading) return <Loading/>





    return (
        <section className='my-16' >
            <p className='text-center text-secondary text-xl font-bold ' >
                Available Appointments on {format(selectedDate, 'PP')}
            </p>

            <div className=' grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6  mt-6 '>
                {
                    appoinmentOptions?.data?.map(option => <AppoinmentOption
                        setTreatment={setTreatment} option={option} key={option._id} />)
                }

            </div>
            {
                treatment && <BookingModal refetch={refetch} setTreatment={setTreatment} selectedDate={selectedDate} treatment={treatment} />
            }


        </section>
    );
};

export default AvailableAppoinment;