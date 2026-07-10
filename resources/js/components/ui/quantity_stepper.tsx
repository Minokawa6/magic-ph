import { useState } from 'react';
interface QuantityStepperProps{
    initialValue?: number
}

export const QuantityStepper = ({initialValue}:QuantityStepperProps) => {
    const [quantity, setQuantity] = useState(initialValue ? initialValue : 1);

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center rounded-md border-2 overflow-hidden">
            <div className="bg-gray-400 border-r-2 px-1 cursor-pointer" onClick={decrease}>-</div>
            <span className="w-8">{quantity}</span>
            <div className="bg-gray-400 border-l-2 px-1 cursor-pointer" onClick={increase}>+</div>
        </div>
    );
};
