import React from "react";

interface PricingSectionProps {
  price: string;
  tripDuration: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  price,
  tripDuration,
}) => {
  return (
    <div className='mt-3 text-4xl'>
      <p className='text-center'>
        <span className='text-blue-800 font-bold'>{price}</span>
        <span className='text-base text-neutral-800'>/{tripDuration}</span>
      </p>
    </div>
  );
};
