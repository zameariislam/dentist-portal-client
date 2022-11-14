import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';


const MakeAppoinment = () => {
    return (
        <div style={{backgroundImage:`url(${appoinment})`}}  className=" bg-base-200  text-white">
            <div className="hero-content flex-col lg:flex-row  gap-x-7">
                <img src={doctor} alt=''   className=" lg:w-1/2 rounded-lg shadow-2xl  -mt-32   hidden  lg:block" />
                <div>
                    <h4 className='text-primary text-lg  font-bold' >Appointment</h4>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;