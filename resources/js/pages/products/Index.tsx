import { ProductCard } from '@/components/products/product_card';
import DefaultLayout from '@/layouts/default_layout';
import { Paginated, ProductListing } from '@/types';
import { router } from '@inertiajs/react';

interface IndexProps {
    productListings: Paginated<ProductListing>;
}

export default function Index({ productListings }: IndexProps) {
    return (
        <DefaultLayout>
            <div className="flex flex-row gap-2 pt-8">
                <div className="flex-1 px-2">
                    <h1>Filter Search:</h1>
                    <form className="flex flex-col gap-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" className="bg-card-bg text-text rounded-md border-2 border-white p-1" />
                        <label htmlFor="type">Type:</label>
                        <input type="text" id="type" name="type" className="bg-card-bg text-text rounded-md border-2 border-white p-1" />
                        <label htmlFor="color">Color:</label>
                        <input type="text" id="color" name="color" className="bg-card-bg text-text rounded-md border-2 border-white p-1" />
                        <label htmlFor="rarity">Rarity:</label>
                        <input type="text" id="rarity" name="rarity" className="bg-card-bg text-text rounded-md border-2 border-white p-1" />
                        <button type="submit" className="bg-card-bg text-text hover:bg-card-hover rounded-md border-2 border-white p-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="flex-0 border-2 border-white"></div>
                <div className="flex h-full flex-4 flex-row justify-start gap-2 overflow-hidden not-even:flex-wrap">
                    {productListings.data.map((listing) => (
                        <ProductCard
                            key={listing.id}
                            id={`${listing.id}`}
                            name={listing.product.name}
                            imgSrc={listing.product.images[0]?.image_path}
                            imgAlt={listing.product.name}
                            subtitle={`#${listing.id} | ${listing.product.product_type}`}
                            price={`${listing.price}`}
                            onClick={() => router.visit('/product-show')}
                            data-testid="product-listing-card"
                        />
                    ))}
                    {/* {Array.from({ length: 20 }).map((_, i) => (
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
                    ))} */}
                </div>
            </div>
        </DefaultLayout>
    );
}
