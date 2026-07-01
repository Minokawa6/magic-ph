import { ConditionTypes } from "@/types"

const conditionColors: Record<ConditionTypes, string> = {
    NM:  'bg-green-600',
    LP:  'bg-lime-500',
    MP:  'bg-yellow-500',
    HP:  'bg-orange-500',
    DMG: 'bg-red-600',
};

type ConditionSize = 'sm' | 'lg';

const conditionSizes: Record<ConditionSize, string> = {
    sm: 'px-1.5 py-0.5 text-xs',
    lg: 'px-3 py-1 text-sm',
};

interface ConditionProps {
    condition: ConditionTypes;
    size?: ConditionSize;
}


export const ConditionTag = ({condition, size = 'sm'}:ConditionProps) =>{

    return(
        <div className={`${conditionColors[condition]} rounded-2xl ${conditionSizes[size]} items-center`}>
            <p className="font-bold text-white text-xs text-center">{condition}</p>
        </div>
    )
}
