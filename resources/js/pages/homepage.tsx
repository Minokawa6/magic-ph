import { ProductCard } from '@/components/products/product_card';
import DefaultLayout from '@/layouts/default_layout';
import { router } from '@inertiajs/react';

export default function Homepage() {
    return (
        <DefaultLayout>
            <div className="flex h-fit flex-1 flex-col items-center pt-6">
                {/* Main Header */}
                <div className="h-[350px] w-[850px] overflow-hidden rounded-2xl border-2 border-none bg-emerald-500">
                    <img className="aspect-[1640/680] h-full w-full object-cover object-center" src="/images/MTGSOS_sma_key_1640x680_en.jpg" />
                </div>
                <h1 className="self-start p-4"> Latest Products</h1>
                {/* Products Grid */} {/*TODO: Create a Map to display Product Cards */}
                <div className="flex gap-4">
                    <ProductCard
                        id="1"
                        name="Lightning Bolt asdgfasdfasdfasdfasfd"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 | 2X2 | Instant | "
                        price="120"
                        onClick={() => router.visit('/product-show')}
                    />
                    <ProductCard
                        id="2"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 | 2X2 | Instant | "
                        price="120"
                    />
                    <ProductCard
                        id="3"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 | 2X2 | Instant | "
                        price="120"
                    />
                    <ProductCard
                        id="4"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 | 2X2 | Instant | "
                        price="120"
                    />
                    <ProductCard
                        id="5"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 | 2X2 | Instant | "
                        price="120"
                    />
                </div>
            </div>
        </DefaultLayout>
    );
}
