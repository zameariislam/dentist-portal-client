import React from 'react';

const Review = ({ review }) => {

    const { name, image, city, review: userReview } = review
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{userReview}</p>
                <div className="card-actions flex items-center  mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>

                    </div>
                    <div>
                        <h5 className='text-lg'> {name}</h5>
                        <p>{city}</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;