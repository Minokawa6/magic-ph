import { Button } from '@/components/ui/button';
import { CartRow } from '@/components/ui/cart-row';
import DefaultLayout from '@/layouts/default_layout';

export default function Index() {
    return (
        <DefaultLayout>
            <div className="bg-card-bg border-border my-8 flex w-full flex-col gap-4 rounded-md border-2 p-4 shadow-lg/50">
                <h1>Your Cart</h1>
                <div className="text-text grid grid-cols-[0.5fr_2fr_0.5fr_0.5fr] place-items-center gap-2 py-1">
                    {/* Row 1 */}
                    <div className="col-span-2 justify-self-start pl-2">Product</div>
                    <div className="">Quantity</div>
                    <div className="pr-2">Total</div>
                    <div className="border-border col-span-4 w-full border-b" />
                    {/* Row 2 */}
                    {/* <div>
                        <img
                            className="aspect-750/1050 w-full overflow-clip rounded-xl p-1"
                            src="/images/mtg-cards/c21-190-garruk-primal-hunter.jpg"
                            alt="Garruk Primal Hunter"
                        />
                    </div>
                    <div className="justify-self-start">
                        <h1>Garruk, Primal Hunter (C21)</h1>
                        <h2>₱100</h2>
                        <div className="w-16">
                            <ConditionTag condition="NM" />
                        </div>
                    </div>
                    <div className="items-center text-center">
                        <QuantityStepper />
                    </div>
                    <div className="text-price font-bold">₱100</div>
                    <div className="border-border col-span-4 w-full border-b" /> */}
                    <CartRow
                        imgSrc="/images/mtg-cards/c21-190-garruk-primal-hunter.jpg"
                        condition="NM"
                        price={100}
                        name="Garruk, Primal Hunter (C21)"
                        quantity={2}
                        totalPrice={200}
                    />
                    <CartRow
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        condition="LP"
                        price={50}
                        name="Lightning Bolt"
                        quantity={1}
                        totalPrice={50}
                    />
                </div>
                <div className="self-end">
                    <div className="flex flex-row place-content-center gap-8 pb-2">
                        <h1>Total: </h1>
                        <h1 className="text-price">₱100</h1>
                    </div>
                    <Button label="Proceed Transaction" />
                </div>
            </div>
        </DefaultLayout>
    );
}
