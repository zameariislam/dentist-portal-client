import React from 'react';

const AppoinmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option
    return (
        <div className="card  shadow-xl">
            <div className="card-body   ">
                <h2 className="  text-center  font-bold text-secondary text-2xl ">{name}</h2>
                <p className='text-center' >{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces ' : 'space'} available</p>



                <div className="card-actions justify-center ">

                    <label  disabled={slots.length===0}  onClick={()=>setTreatment(option)}
                    htmlFor="booking-modal" className="btn  btn-primary text-white">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;