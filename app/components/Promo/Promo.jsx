"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Styles from "./Promo.module.css";

export const Promo = () => {
    const [codeIsVisible, setCodeIsVisible] = React.useState(false);
    React.useEffect(() => {
        let timeout;
        if (codeIsVisible) {
            timeout = setTimeout(() => {
                setCodeIsVisible(false);
            }, 5000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [codeIsVisible]);

    const handleVisibleCode = () => {
        setCodeIsVisible(!codeIsVisible);
    };

    return (
        <section className={Styles["promo"]}>
            <div className={Styles["promo__description-block"]}>
                <h2 className={Styles["promo__title"]}>Твой промо-код</h2>
                <p className={Styles["promo__description"]}>
                    Скидка на все курсы Яндекс Практикума для пользователей
                    нашего сайта!
                </p>
                <button
                    className={`button ${Styles["promo__button"]}`}
                    onClick={() => handleVisibleCode()}
                >
                    {codeIsVisible ? (
                        <span>WEBTEENS10</span>
                    ) : (
                        <span>Получить код</span>
                    )}
                </button>
            </div>
            <img
                src="./images/promo-illustration.svg"
                alt="Собака"
                className={Styles["promo__image"]}
            />
        </section>
    );
};
