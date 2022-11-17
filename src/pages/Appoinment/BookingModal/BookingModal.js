
import { format } from 'date-fns';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment,refetch }) => {

    const { user } = useContext(AuthContext)


    const { name: treatementName, slots } = treatment


    const date = format(selectedDate, 'PP')


    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target
        const slot = form.slot.value
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value

        const booking = {

            appoinmentDate: date,
            treatment: treatementName,
            slot,

            patient: name,
            email,
            phone

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {

                setTreatment(null)
                if (data.success) {
                    toast.success('Booking Confirmed')
                    refetch()
                }

            })
            .catch(error => console.log(error.message))






    }



    return (
        <>


            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatementName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-6' >
                        <input type="text" placeholder="Type here" className="input input-bordered " disabled value={date} />
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots?.length > 0 ? slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}   >{slot}</option>) : ''
                            }





                        </select>
                        <input disabled defaultValue={user?.displayName} name='name' type="text" placeholder="Full Name" className="input input-bordered " />
                        <input disabled defaultValue={user?.email} name='email' type="email" placeholder="Email Adress" className="input input-bordered " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered " />

                        <input type="submit" value='Submit' className="btn btn-accent input-bordered " />




                    </form>


                </div>
            </div>

        </>
    );
};

export default BookingModal;