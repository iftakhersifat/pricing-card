import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingCards = ({ pricingPromise }) => {
  const useData = use(pricingPromise);

  return (
    <>
      <div>
        <h1>Get Our Membership</h1>
        <div>
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
