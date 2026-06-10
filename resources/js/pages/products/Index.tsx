import { ProductCard } from '@/components/products/product_card';
import DefaultLayout from '@/layouts/default_layout';
import { router } from '@inertiajs/react';

export default function Index() {
    return (
        <DefaultLayout>
            <div className="flex h-full min-h-0 flex-1 flex-row place-content-center overflow-hidden bg-amber-200 p-4">
                <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <ProductCard
                            key={i}
                            id={String(i)}
                            name="Lightning Bolt"
                            imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                            imgAlt="Lightning Bolt"
                            subtitle="#177 2X2 Instant"
                            price="₱120"
                            onClick={() => router.visit('/product-show')}
                        />
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}
