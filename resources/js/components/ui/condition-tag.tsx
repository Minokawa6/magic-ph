type conditionTypes = 'NM' | 'LP'| 'MP' | 'HP' | 'DMG';

const conditionColors: Record<conditionTypes, string> = {
    NM:  'bg-green-600',
    LP:  'bg-lime-500',
    MP:  'bg-yellow-500',
    HP:  'bg-orange-500',
    DMG: 'bg-red-600',
};

type conditionSize = 'sm' | 'lg';

const conditionSizes: Record<conditionSize, string> = {
    sm: 'px-1.5 py-0.5 text-xs',
    lg: 'px-3 py-1 text-sm',
};

interface conditionProps {
    condition: conditionTypes;
    size?: conditionSize;
}


export const ConditionTag = ({condition, size = 'sm'}:conditionProps) =>{

    return(
        <div className={`${conditionColors[condition]} rounded-2xl ${conditionSizes[size]} items-center`}>
            <p className="font-bold text-white text-xs">{condition}</p>
        </div>
    )
}
