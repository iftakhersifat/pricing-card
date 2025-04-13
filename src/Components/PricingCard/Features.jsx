import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex gap-4'><CircleCheckBig></CircleCheckBig>{feature}</p>
        </div>
    );
};

export default Features;