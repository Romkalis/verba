import s from "./styles.module.css";
interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  text?: string;
  addedClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const InputField = ({
  name,
  type = "text",
  placeholder,
  text,
  addedClass = "",
  onChange,
  value = "",
}: InputProps) => {
  
  return (
    
    <label htmlFor={name}>
      {text}
      <input
        className={`${s.input} ${addedClass}`}
        type={type}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        value={value}
      />
    </label>

);
};
