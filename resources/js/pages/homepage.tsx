import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
export default function Homepage() {
    return (
        <>
            <Head title="Home"></Head>
            {/* Navigation */}
            <nav className="flex max-h-20 w-screen flex-row items-center gap-4 bg-white px-8 py-4">
                <h1 className="text-2xl text-black">Magic Online PH</h1>
                <div className="relative grow">
                    <input className="w-full rounded-xl border-2 py-1 pr-8 pl-3" placeholder="Search..." />
                    <img className="absolute top-1/2 right-2 h-5 -translate-y-1/2" src="/images/search-icon.svg" alt="search"></img>
                </div>
                <img className="h-8" src="/images/cart-icon.svg" alt="shopping cart" />
                <img className="h-8" src="/images/circle-icon.svg" alt="Profile" />
            </nav>
            {/* Content */}
            <div className="h-full w-full bg-amber-200 p-8">
                {/* Main Header */}
                <div className="flex w-full items-center justify-center gap-8 rounded-2xl border-2 border-none bg-emerald-500 p-4">
                    <img className="h-32" src="/images/SOS_expansion_symbol.webp"></img>
                    <h1 className="h-auto w-32 text-center text-xl font-bold text-wrap text-black">Secrets of Strixhaven</h1>
                    {/* button */}
                    <Button label="Available Here ->" />
                </div>
                <h1 className="text-2xl font-extrabold text-black"> Latest Products</h1>
                {/* Products Grid */}
                <div className="m-auto grid grid-cols-4">
                    <Card
                        id="1"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                    />
                    <Card
                        id="2"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                    />
                    <Card
                        id="3"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                    />
                    <Card
                        id="4"
                        name="Lightning Bolt"
                        imgSrc="/images/mtg-cards/2x2-117-lightning-bolt.jpg"
                        imgAlt="Lightning Bolt"
                        subtitle="#177 2X2 Instant"
                        price="₱120"
                    />
                </div>
            </div>
        </>
    );
}
