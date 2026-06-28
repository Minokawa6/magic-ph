import { Button } from '@/components/ui/button';
import { ConditionTag } from '@/components/ui/condition-tag';
import { QuantityStepper } from '@/components/ui/quantity_stepper';
import DefaultLayout from '@/layouts/default_layout';

//TODO Add interface to product show page

export default function Show() {
    return (
        <DefaultLayout>
            <div className="flex h-full flex-row place-content-center p-4">
                <div className="z-10 h-fit overflow-hidden rounded-2xl object-contain shadow-lg/50">
                    <img className="h-[500px]" src="/images/mtg-cards/c21-190-garruk-primal-hunter.jpg" alt="Garruk Primal Hunter" />
                </div>

                <div className="bg-card-bg z-0 -ml-6 flex h-fit max-w-lg flex-col place-content-center self-center rounded-lg border-2 border-[#676767]">
                    <h1 className="w-full border-b-2 border-[#676767] px-8 py-4 text-4xl font-bold"> Garruk, Primal Hunter</h1>
                    <div className="flex flex-row gap-2 border-b-2 border-[#676767] px-8 py-4">
                        <i className="ss ss-c21 text-text text-5xl!" />

                        <div>
                            <h2 className="text-subtext"> Commander 2021 (C21)</h2>
                            <h2 className="text-subtext"> #190 | Mythic | English | Nonfoil </h2>
                        </div>
                    </div>
                    <div className="grid w-fit grid-cols-5 gap-2 px-8 text-center">
                        {/* row 1 */}
                        <div className="flex-1/5">Condition</div>
                        <div className="flex-1/5">Price</div>
                        <div className="flex-1/5">Stock</div>
                        <div className="flex-1/5"></div>
                        <div className="flex-1/5"></div>
                        {/* row 2 */}
                        <div className="flex-1/5">
                            <ConditionTag condition="NM" />
                        </div>
                        <div className="flex-1/5">₱100</div>
                        <div className="flex-1/5">2</div>
                        <div className="flex-1/5">
                            <QuantityStepper />
                        </div>
                        <div className="flex-1/5">
                            <Button label="Add to Card" />
                        </div>
                    </div>
                    <h1 className="px-8"> Condition: NM</h1>
                    <h2 className="px-8"> In-Stock: 2</h2>
                    <h2 className="px-8"> Price: ₱100</h2>
                    <h2 className="px-8">
                        Quantity: 1 <Button label="Add to Cart" />
                    </h2>
                </div>
            </div>
        </DefaultLayout>
    );
}
