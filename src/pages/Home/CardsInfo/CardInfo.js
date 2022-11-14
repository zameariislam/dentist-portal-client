import React from 'react';

const CardInfo = ({ card }) => {
    const { name, description, icon,bgClass } = card
    return (
        <div className={`card card-side bg-base-100 shadow-x ${bgClass} p-3 text-white `}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default CardInfo;