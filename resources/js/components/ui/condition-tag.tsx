type conditionTypes = 'NM' | 'LP'| 'MP' | 'HP';

interface conditionProps {
    condition: conditionTypes
}


export const ConditionTag = ({condition}:conditionProps) =>{

    return(
        <div className="bg-nm rounded-2xl size-fit px-2 items-center">
            <p className="font-bold text-white text-xs">{condition}</p>
        </div>
    )
}
