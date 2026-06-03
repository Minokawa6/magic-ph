type btnStyleType = 'primary' | 'secondary';

interface buttonProps {
    label: string,
    style?: btnStyleType,
    disabled?: boolean,
    onClick?: () => void
};
const btnStyles = {
    primary: 'cursor-pointer rounded-md border-2 border-none bg-cyan-500 px-4 py-2 font-bold text-center',
    secondary: ''
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
