import { router } from '@inertiajs/react';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <nav className="flex max-h-20 w-screen flex-row items-center gap-4 bg-white px-8 py-4">
                <h1 className="cursor-pointer text-2xl text-black" onClick={() => router.visit('/')}>
                    Magic Online PH
                </h1>
                <div className="relative grow" onClick={() => router.visit('/products')}>
                    <input className="w-full rounded-xl border-2 py-1 pr-8 pl-3" placeholder="Search..." />
                    <img className="absolute top-1/2 right-2 h-5 -translate-y-1/2" src="/images/search-icon.svg" alt="search"></img>
                </div>
                <img className="h-8 cursor-pointer" src="/images/cart-icon.svg" alt="shopping cart" onClick={() => router.visit('/cart')} />
                <img className="h-8" src="/images/circle-icon.svg" alt="Profile" />
            </nav>
            {/* Content */}
            <main className="flex flex-1 flex-col">{children}</main>
        </div>
    );
}
