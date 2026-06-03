import { Button } from "./button"
interface cardProps {
    id: string,
    name: string,
    imgSrc?: string,
    imgAlt?: string,
    subtitle: string,
    price: string
}

export const Card = ({
    id,
    name,
    imgSrc = '/images/mtg-cards/2x2-117-lightning-bolt.jpg',
    imgAlt = 'noSrc',
    subtitle,
    price,
}: cardProps) =>{
    return(
        <div id={id} className="flex flex-col justify-evenly m-auto w-64 h-full rounded-2xl border-2 border-none bg-white px-8 py-4 gap-1">
        <h1 className="text-center font-bold text-black">{name}</h1>
        <img src={imgSrc} alt={imgAlt}></img>
        <h2 className="text-sm  text-gray-500">{subtitle}</h2>
        <Button label={price}/>
    </div>
    )

}
