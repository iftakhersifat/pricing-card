import React from 'react';

const PricingCard = ({data}) => {
    const {name, price, description, features} =data;
    return (
        <div className='bg-amber-400 rounded-xl p-4'>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{description}</h1>
            <h1>{features}</h1>
        </div>
    );
};

export default PricingCard;