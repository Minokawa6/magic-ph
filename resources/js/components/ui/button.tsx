type btnStyleType = 'primary' | 'secondary';

interface buttonProps {
    label: string,
    style?: btnStyleType,
    disabled?: boolean,
    onClick?: () => void
};
const btnStyles = {
    primary: 'cursor-pointer rounded-md border-2 border-none font-bold text-white bg-[#3984e7] px-4 py-2 text-center',
    secondary: 'cursor-pointer rounded-md h-8 border-2 border-none font-bold text-xs text-white bg-[#3984e7] px-4 text-center',
};

export const Button = ({
    label,
    style = 'primary',
    disabled = false,
    onClick,
    }: buttonProps) =>{
        return(
            <button
                className ={`${btnStyles[style]}`}
                disabled = {disabled}
                onClick = {onClick}
            >
                {label}
            </button>
        )
};
