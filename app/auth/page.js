"use client";
import React from "react";
import Styles from "./AuthForm.module.css";
import { authorize } from "../api/api-utils";
import { endpoints } from "../api/config";
import { useStore } from "../store/app-store";
import { Alert } from "@mui/material";

const AuthPage = () => {
    const authContext = useStore();

    // тут ничего не работает, страница для одного из уроков

    return (
        <form className={Styles["form"]}>
            <Alert severity="warning">
                Внимание! Регистрация доступна только через меню&nbsp;
                {"Шапка"} в верху экрана! Данная форма не работает!
            </Alert>
            <h2 className={Styles["form__title"]}>Регистрация</h2>
            <div className={Styles["form__fields"]}>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Никнейм</span>
                    <input
                        className={Styles["form__field-input"]}
                        type="text"
                        placeholder="askilover"
                    />
                </label>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Email</span>
                    <input
                        className={Styles["form__field-input"]}
                        type="email"
                        placeholder="hello@world.com"
                    />
                </label>
                <label className={Styles["form__field"]}>
                    <span className={Styles["form__field-title"]}>Пароль</span>
                    <input
                        className={Styles["form__field-input"]}
                        type="password"
                        placeholder="***********"
                    />
                </label>
            </div>
            <div className={Styles["form__actions"]}>
                <button className={Styles["form__reset"]} type="reset">
                    Очистить
                </button>
                <button className={Styles["form__submit"]} type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};

export default AuthPage;
