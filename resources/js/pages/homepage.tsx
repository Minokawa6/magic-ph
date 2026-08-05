import { ProductCard } from '@/components/products/product_card';
import DefaultLayout from '@/layouts/default_layout';
import { ProductListing } from '@/types';
import { router } from '@inertiajs/react';

interface HomepageProps {
    productListings: ProductListing[];
}

export default function Homepage({ productListings }: HomepageProps) {
    console.log(productListings);
    return (
        <DefaultLayout>
            <div className="flex h-fit flex-1 flex-col items-center pt-6">
                {/* Main Header */}
                <div className="h-[350px] w-[850px] overflow-hidden rounded-2xl border-2 border-none">
                    <img className="aspect-[1640/680] h-full w-full object-cover object-center" src="/images/MTGSOS_sma_key_1640x680_en.jpg" />
                </div>
                <h1 className="self-start p-4"> Latest Products</h1>
                {/* Products Grid */} {/*TODO: Create a Map to display Product Cards */}
                <div className="flex gap-4">
                    {productListings.map((listing) => (
                        <ProductCard
                            key={listing.id}
                            id={`${listing.id}`}
                            name={listing.product.name}
                            imgSrc={listing.product.images[0]?.image_path}
                            imgAlt={listing.product.name}
                            subtitle={`#${listing.id} | ${listing.product.product_type}`}
                            price={`₱${listing.price}`}
                            onClick={() => router.visit('/product-show')}
                            data-testid="product-listing-card"
                        />
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}
