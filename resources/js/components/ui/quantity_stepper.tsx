import { useState } from 'react';

export const QuantityStepper = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center">
            <div onClick={decrease}>-</div>
            <span className="mx-2">{quantity}</span>
            <div onClick={increase}>+</div>
        </div>
    );
};
