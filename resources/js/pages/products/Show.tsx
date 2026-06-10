import { Button } from '@/components/ui/button';
import DefaultLayout from '@/layouts/default_layout';
export default function Show() {
    return (
        <DefaultLayout>
            <div className="flex h-full min-h-0 flex-1 flex-row place-content-center overflow-hidden bg-amber-200 p-4">
                <img
                    className="max-h-[75vh] flex-1/8 object-contain p-4"
                    src="/images/mtg-cards/c21-190-garruk-primal-hunter.jpg"
                    alt="Garrul Primal Hunter"
                />
                <div className="flex flex-1 flex-col justify-center text-black">
                    <h1 className="text-4xl font-bold"> Garruk, Primal Hunter</h1>
                    <h2 className="text-gray-500"> Commander 2021 (C21)</h2>
                    <h2 className="text-gray-500"> #190 | Mythic | English | Nonfoil </h2>
                    <h1> Condition: NM</h1>
                    <h2> In-Stock: 2</h2>
                    <h2> Price: ₱100</h2>
                    <h2>
                        Quantity: 1 <Button label="Add to Card" />
                    </h2>
                </div>
            </div>
        </DefaultLayout>
    );
}
