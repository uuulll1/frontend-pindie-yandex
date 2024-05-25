/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Styles from "./AuthForm.module.css";
import { authorize, isResponseOk } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { useStore } from "../../store/app-store";
import { Button } from "@mui/material";
import Link from "next/link";

export const AuthForm = (props) => {
    const [authData, setAuthData] = React.useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = React.useState({ status: null, text: null });
    // const [type, setType] = React.useState("login");
    const authContext = useStore();

    // React.useEffect(() => {
    //     authorize(endpoints.auth, {
    //         identifier: "aski@example.com",
    //         password: "ilovehtml",
    //     }).then((res) => console.log(res));
    // }, []);

    React.useEffect(() => {
        let timer;
        if (authContext.user) {
            // Данные о user из контекста
            timer = setTimeout(() => {
                setMessage({ status: null, text: null });
                props.close();
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [authContext.user]);

    const handleInput = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await authorize(endpoints.auth, authData);
        if (isResponseOk(userData)) {
            authContext.login({ ...userData, id: userData._id }, userData.jwt);
            setMessage({ status: "success", text: "Вы авторизовались!" });
        } else {
            setMessage({ status: "error", text: "Неверные почта или пароль" });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={Styles["form"]}>
                <h2 className={Styles["form__title"]}>Авторизация</h2>
                <div className={Styles["form__fields"]}>
                    <label className={Styles["form__field"]}>
                        <span className={Styles["form__field-title"]}>
                            Email
                        </span>
                        <input
                            onInput={handleInput}
                            className={Styles["form__field-input"]}
                            name="email"
                            type="email"
                            placeholder="hello@world.com"
                        />
                    </label>
                    <label className={Styles["form__field"]}>
                        <span className={Styles["form__field-title"]}>
                            Пароль
                        </span>
                        <input
                            onInput={handleInput}
                            className={Styles["form__field-input"]}
                            name="password"
                            type="password"
                            placeholder="hello@world.com"
                        />
                    </label>
                </div>
                {message.status && (
                    <p className={Styles["form__message"]}>{message.text}</p>
                )}
                <div className={Styles["form__actions"]}>
                    <button className={Styles["form__reset"]} type="reset">
                        Очистить
                    </button>
                    <button className={Styles["form__submit"]} type="submit">
                        Войти
                    </button>
                </div>
                {/* <Button variant="text">Регистрация</Button> */}
            </form>
        </>
    );
};
