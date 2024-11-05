import { User } from "../../store/slices/users";
import { Button } from "../Button/Button";
import { InputField } from "../Input/Input";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks/hooks";
import s from "./styles.module.css";

interface LoginProps {
    setIsLogged: (value: boolean) => void;
}

export const Login = ({setIsLogged}: LoginProps) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = useAppSelector(state => state.users)

  const handlerUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value)
  };
  const handlerPassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
  };
  const handleCheckUser = () => {
    
    const login = users.find( (user: User) => user.name === username)
    if (login && login.password === password) {
        setIsLogged(true)
    }

  }
  const handlerClear = () => {
    setUsername('')
    setPassword('')
  }

  return (
    <article className={s.login__section}>
      <InputField
        onChange={handlerUsername}
        type={"text"}
        name={"name"}
        placeholder={"Введите логин"}
        addedClass={s.login__input}
        value={username}
      />
      <InputField
        onChange={handlerPassword}
        type="password"
        name={"password"}
        placeholder="Введите пароль"
        addedClass={s.login__input}
        value={password}
      />

      <div className={s.buttons}>
        <Button onClick={handleCheckUser} addedClass={`${s.login__enter}`}>Войти</Button>
        <Button onClick={handlerClear} addedClass={`${s.login__reset}`}>Сбросить</Button>
      </div>
    </article>
  );
};
