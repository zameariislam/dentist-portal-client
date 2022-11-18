import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyAppoinment = () => {


    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    console.log(url)
   



    const { data:bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],

        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()


            return data

        }


    })






    return (
        <div>
            <h3 className='text-3xl  mb-5'>My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => (<tr>
                                <th>{index}</th>
                                <td>{booking?.patient}</td>
                                <td>{booking?.treatment}</td>
                                <td>{booking?.appoinmentDate}</td>
                                <td>{booking?.slot}</td>
                            </tr>))
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppoinment;