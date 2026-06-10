import { ProductCard } from '@/components/products/product_card';
import { Button } from '@/components/ui/button';
import DefaultLayout from '@/layouts/default_layout';
import { router } from '@inertiajs/react';

export default function Homepage() {
    return (
        <DefaultLayout>
            <div className="flex h-full w-full flex-1 flex-col items-center bg-amber-200 pt-6">
                {/* Main Header */}
                <div className="flex w-2/3 items-center justify-center gap-8 rounded-2xl border-2 border-none bg-emerald-500 p-4">
                    <img className="h-32" src="/images/SOS_expansion_symbol.webp"></img>
                    <h1 className="h-auto w-32 text-center text-xl font-bold text-wrap text-black">Secrets of Strixhaven</h1>
                    {/* button */}
                    <Button label="Available Here ->" />
                </div>
                <h1 className="self-start p-4 text-2xl font-extrabold text-black"> Latest Products</h1>
                {/* Products Grid */}
                <div className="grid w-full grid-cols-4">
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
