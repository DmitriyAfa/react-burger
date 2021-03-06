import { useState,  useEffect } from "react";
import {  useHistory, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import styles from "../../styles/login.module.css";
import "../../styles/styles.css"; // Для стилизации компонентов из Яндекс библиотеки приходится использовать не моудльные стили, иначе стилизация не работает.
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

import { useActions } from "../../utils/useAction";

function LoginPage() {
  const history: any = useHistory();
  const { login, getUser } = useActions();
  const isLoggedIn = useSelector(
    (state: any) => state.user.isLoggedIn
  );

  const [isLoading, setIsLoading] = useState(false);
  const [form, setValue] = useState({ email: "", password: "" });

  const getUserFunc = async () => {
    const res: any = await getUser();
    console.log(res);
  };

  useEffect(() => {
    getUserFunc();
  }, []);

  const onChange = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLInputElement;
    setValue({ ...form, [target.name]: target.value });
  };

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res: any = await login(form);
    if (res) {
      setIsLoading(false);
    }
  };

  
  if (isLoggedIn) {
    return <Redirect to={history?.location?.state?.from || "/"} />;
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <form onSubmit={submit} className={styles.form}>
            <p className={`${styles.title} text text_type_main-medium`}>Вход</p>
            <div className={` mt-6`}>
              <Input
                placeholder="E-mail"
                value={form.email}
                name="email"
                size="default"
                onChange={onChange}
              />
            </div>
            <div className={` mt-6`}>
              <PasswordInput
                value={form.password}
                name={"password"}
                size="default"
                onChange={onChange}
              />
            </div>
            <div className={`${styles.button} mt-6`}>
              {isLoading ? (
                "Ожидание ответа сервера"
              ) : (
                <Button type="primary" size="medium">
                  Войти
                </Button>
              )}
            </div>
          </form>

          <div className={`${styles.button} text text_type_main-default mt-20`}>
            Вы - новый пользователь?
            <Link to="/register" className={styles.link}>
              Зарегистрироваться
            </Link>
          </div>
          <div className={`${styles.button} text text_type_main-default mt-4`}>
            Забыли пароль?
            <Link to="/forgot-password" className={styles.link}>
              Восстановить пароль
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
