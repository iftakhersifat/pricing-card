import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingCards = ({ pricingPromise }) => {
  const useData = use(pricingPromise);

  return (
    <>
      <div>
        <h1 className='p-4 text-4xl font-bold'>Get Our Membership</h1>
        <div className='grid md:grid-cols-3 gap-4 p-4'>
        {
          useData.map(data => (
            <PricingCard key={data.id} data={data} />
          ))
        }
        </div>
      </div>
    </>
  );
};

export default PricingCards;
