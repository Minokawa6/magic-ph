import { Fragment } from "react/jsx-runtime"
import { ConditionTag } from "./condition-tag"
import { QuantityStepper } from "./quantity_stepper"
import { ConditionTypes } from "@/types"

interface CartRowProps{
    imgSrc: string,
    condition: ConditionTypes,
    price: number,
    name: string,
    quantity: number,
    totalPrice: number
}

export const CartRow = ({ imgSrc, condition, price, name, quantity, totalPrice }:CartRowProps) => {
    return(
        <Fragment>
            <div>
                <img
                    className="aspect-750/1050 w-full overflow-clip rounded-xl p-1"
                    src={imgSrc}
                   alt="Garruk Primal Hunter"
                 />
            </div>
            <div className="justify-self-start">
                <h1>{name}</h1>
                <h2>₱{price}</h2>
                <div className="w-16">
                    <ConditionTag condition={condition} />
                </div>
            </div>
            <div className="items-center text-center">
                <QuantityStepper initialValue={quantity}/>
            </div>
            <div className="text-price font-bold">₱{totalPrice}</div>
            <div className="border-border col-span-4 w-full border-b" />
        </Fragment>
    )
}
