import s from './styles.module.css'

interface ButtonProps {
    children: React.ReactNode;
    addedClass: string;
    onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({children, addedClass = '', onClick}) => {
    return (
        <button className={`${s.button} ${addedClass}`} onClick={onClick}>
            {children}
        </button>
    )
}