import { Head } from '@inertiajs/react';
export default function Homepage() {
    return (
        <>
            <Head title="Home"></Head>
            <nav className="flex max-h-20 w-screen flex-row items-center gap-4 bg-white px-8 py-4">
                <h1 className="text-2xl text-black">Magic Online PH</h1>
                <div className="relative grow">
                    <input className="w-full rounded-xl border-2 py-1 pr-8 pl-3" placeholder="Search..." />
                    <img className="absolute top-1/2 right-2 h-5 -translate-y-1/2" src="/images/search-icon.svg" alt="search"></img>
                </div>
                <img className="h-8" src="/images/cart-icon.svg" alt="shopping cart" />
                <img className="h-8" src="/images/circle-icon.svg" alt="Profile" />
            </nav>
            <div className="h-screen w-screen bg-amber-200"></div>
        </>
    );
}
