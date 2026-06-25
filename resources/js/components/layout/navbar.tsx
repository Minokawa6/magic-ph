interface NavBarProps {
    onHomeClick: () => void;
}

export const NavBar = ({ onHomeClick }: NavBarProps) => {
    return (
        <nav className="bg-nav flex max-h-20 w-screen flex-row items-center gap-4 px-8 py-4">
            <h1 className="cursor-pointer text-[#ededed]" onClick={onHomeClick}>
                Magic Online PH
            </h1>
            <div className="relative grow rounded-xl border-2 border-none bg-[#ededed]">
                <input className="w-full py-1 pr-8 pl-3" placeholder="Search..." />
                <img className="absolute top-1/2 right-2 h-5 -translate-y-1/2" src="/images/search-icon.svg" alt="search"></img>
            </div>
            <img className="h-8 cursor-pointer invert" src="/images/cart-icon.svg" alt="shopping cart" />
            <img className="h-8 invert" src="/images/circle-icon.svg" alt="Profile" />
        </nav>
    );
};
