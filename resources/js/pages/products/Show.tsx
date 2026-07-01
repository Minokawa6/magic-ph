import { PriceRow } from '@/components/ui/price-row';
import DefaultLayout from '@/layouts/default_layout';
import { ConditionTypes } from '@/types';

//TODO Add interface to product show page

interface PriceRowData {
    condition: ConditionTypes;
    price: string;
    stock: number;
}

export default function Show() {
    const priceRows: PriceRowData[] = [
        { condition: 'NM', price: '₱100', stock: 2 },
        { condition: 'LP', price: '₱90', stock: 2 },
        { condition: 'MP', price: '₱85', stock: 1 },
    ];

    return (
        <DefaultLayout>
            <div className="flex h-full flex-row place-content-center p-4">
                <div className="z-10 h-fit overflow-hidden rounded-2xl object-contain shadow-lg/50">
                    <img className="h-[500px]" src="/images/mtg-cards/c21-190-garruk-primal-hunter.jpg" alt="Garruk Primal Hunter" />
                </div>

                <div className="bg-card-bg z-0 -mt-8 -ml-6 flex h-fit max-w-lg flex-col place-content-center self-center rounded-lg border-2 border-[#676767]">
                    <h1 className="border-border w-full border-b-2 px-8 py-4 text-4xl font-bold"> Garruk, Primal Hunter</h1>
                    <div className="border-border flex flex-row gap-2 border-b-2 px-8 py-4">
                        <i className="ss ss-c21 text-text text-5xl!" />

                        <div>
                            <h2 className="text-subtext"> Commander 2021 (C21)</h2>
                            <h2 className="text-subtext"> #190 | Mythic | English | Nonfoil </h2>
                        </div>
                    </div>
                    <div className="text-text grid w-fit grid-cols-[1fr_0.75fr_0.75fr_1fr_1.5fr] place-items-center gap-2 px-8 py-4 text-center">
                        {/* row 1 */}
                        <div>Condition</div>
                        <div>Price</div>
                        <div>Stock</div>
                        <div />
                        <div />

                        {priceRows.map((row) => (
                            <PriceRow key={row.condition} {...row} />
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
