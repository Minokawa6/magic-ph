import { Link } from '@inertiajs/react';
interface NavBarProps {
    onHomeClick: () => void;
    onProfileClick: () => void;
    onCartClick: () => void;
}

export const NavBar = ({ onHomeClick, onProfileClick, onCartClick }: NavBarProps) => {
    return (
        <nav className="bg-nav flex h-fit w-full flex-col gap-4 px-8 pt-4">
            <div className="flex w-full flex-row items-center gap-4">
                <h1 className="cursor-pointer text-[#ededed]" onClick={onHomeClick}>
                    Magic Online PH
                </h1>
                <div className="relative grow rounded-xl border-2 border-none bg-[#ededed]">
                    <input className="w-full rounded-xl py-1 pr-8 pl-3" placeholder="Search..." />
                    <img className="absolute top-1/2 right-2 h-5 -translate-y-1/2" src="/images/search-icon.svg" alt="search"></img>
                </div>
                <img className="h-8 cursor-pointer invert" onClick={onCartClick} src="/images/cart-icon.svg" alt="shopping cart" />
                <img className="h-8 cursor-pointer invert" onClick={onProfileClick} src="/images/circle-icon.svg" alt="Profile" />
            </div>
            <div className="flex w-full flex-row border-t-2 border-[#444E80] px-4 text-sm">
                <Link href="/productlistings" className="my-1 px-4 font-medium text-[#ededed]">
                    Singles
                </Link>
                <Link href="/" className="my-1 border-l-2 border-[#444E80] px-4 font-medium text-[#ededed]">
                    Sealed
                </Link>
            </div>
        </nav>
    );
};
