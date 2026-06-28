import { Button } from '../ui/button';
import { ConditionTag } from '../ui/condition-tag';
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
            className="text-text bg-card-bg flex h-fit w-[230px] cursor-pointer flex-col justify-evenly gap-1 rounded-2xl border-2 border-none p-2"
            onClick={onClick}
        >
            <div className="flex h-16 items-center">
                <h2 className="line-clamp-2 text-base font-bold text-wrap">{name}</h2>
            </div>
            <img className="w-[214px] rounded-xl" src={imgSrc} alt={imgAlt}></img>
            <div className="flex flex-row items-center gap-1">
                <h3 className="text-subtext text-xs">{subtitle}</h3>
                <ConditionTag condition="NM" />
            </div>
            <h4 className="text-price font-bold">₱{price}</h4>
            <h3 className="text-subtext text-xs">Quantity: 2</h3>
            <Button label="Add to Cart" />
        </div>
    );
};
