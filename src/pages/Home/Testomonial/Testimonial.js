import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {



    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            city: 'California',
            review:`It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content`,
            image: people1,



        },
        {
            id: 2,
            name: 'Winson Herry',
            city: 'California',
            review:`It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content`,
            image: people2,



        },
        {
            id: 3,
            name: 'Winson Herry',
            city: 'California',
            review:`It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content`,
            image: people3,



        },

    ]


    return (
        <section className='my-16'>
            <div className='flex  justify-between '>
                <div>
                    <h4 className="text-xl  text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>

                </div>
                <figure>
                    <img src={quote} alt=""  className='  sm:w-24 w-48' />

                </figure>

            </div>

            <div   className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review=><   Review key={review.id} review={review}  />)
                }

            </div>

        </section>
    );
};

export default Testimonial;