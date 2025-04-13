import React from 'react';
import Features from './features';

const PricingCard = ({data}) => {
    const {name, price, description, features} =data;
    return (
        <div className='bg-amber-600 rounded-xl p-4 space-y-3 text-white'>
            <h1 className='font-bold text-2xl text-white'>{name}</h1>
            <p className='font-semibold text-md text-white'>{price}</p>
            <h1 className='font-semibold text-md text-white'>{description}</h1>
            <div className=' text-white bg-amber-400 border border-white rounded-xl p-3 space-y-3'>
            {
                features.map((feature, index)=> <Features key={index} feature={feature}/>)
            }
            </div>
            <button className="btn btn-neutral font-semibold text-md rounded-xl w-full">Subscribe</button>
        </div>
    );
};

export default PricingCard;