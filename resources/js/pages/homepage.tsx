import { ProductCard } from '@/components/products/product_card';
import DefaultLayout from '@/layouts/default_layout';
import { router } from '@inertiajs/react';

export default function Homepage() {
    return (
        <DefaultLayout>
            <div className="flex h-fit w-screen flex-1 flex-col items-center pt-6">
                {/* Main Header */}
                <div className="h-60 w-2/3 items-center overflow-hidden rounded-2xl border-2 border-none bg-emerald-500">
                    <img className="object-fill" src="/images/MTGSOS_sma_key_1640x680_en.jpg"></img>
                    {/* <div className="relative"> //TODO
                        <Button label="Available Here ->" />
                    </div> */}
                </div>
                <h1 className="self-start p-4 text-2xl font-extrabold text-black"> Latest Products</h1>
                {/* Products Grid */}
                <div className="grid grid-cols-4">
                    <ProductCard
                        id="1"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                        onClick={() => router.visit('/product-show')}
                    />
                    <ProductCard
                        id="2"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                    />
                    <ProductCard
                        id="3"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                    />
                    <ProductCard
                        id="4"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                    />
                </div>
            </div>
        </DefaultLayout>
    );
}
