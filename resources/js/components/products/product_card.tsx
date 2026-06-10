import { Button } from '../ui/button';
interface productCardProps {
    id: string;
    name: string;
    imgSrc?: string;
    imgAlt?: string;
    subtitle: string;
    price: string;
    onClick?: () => void;
}

export const ProductCard = ({
    id,
    name,
    imgSrc = '/images/mtg-cards/2x2-117-lightning-bolt.jpg',
    imgAlt = 'noSrc',
    subtitle,
    price,
    onClick,
}: productCardProps) => {
    return (
        <div
            id={id}
            className="m-auto flex h-[400px] w-64 cursor-pointer flex-col justify-evenly gap-1 rounded-2xl border-2 border-none bg-white px-8 py-4"
            onClick={onClick}
        >
            <h1 className="text-center font-bold text-black">{name}</h1>
            <img src={imgSrc} alt={imgAlt}></img>
            <h2 className="text-sm text-gray-500">{subtitle}</h2>
            <Button label={price} />
        </div>
    );
};
