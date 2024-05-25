"use client";
import React from "react";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

const Shooter = () => {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

    return (
        <main className={"main-inner"}>
            {shooterGames ? (
                <CardsListSection
                    id="shooters"
                    title="Шутеры"
                    data={shooterGames}
                />
            ) : (
                <Preloader />
            )}
        </main>
    );
};

export default Shooter;
