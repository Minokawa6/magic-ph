import { Button } from "./button"
import { ConditionTag } from "./condition-tag"
import { QuantityStepper } from "./quantity_stepper"
import { Fragment } from "react"
import { ConditionTypes } from "@/types"

interface PriceRowProps{
    condition: ConditionTypes,
    price: string,
    stock: number
};

export const PriceRow = ({condition, price, stock}: PriceRowProps) => {
    return(
        <Fragment>
            <div className="justify-self-stretch">
                <ConditionTag condition={condition} />
            </div>
            <div className="text-price font-bold">{price}</div>
            <div>{stock}</div>
            <div>
                <QuantityStepper />
            </div>
            <div>
                <Button style="secondary" label="Add to Cart" />
            </div>
        </Fragment>
    )
}
