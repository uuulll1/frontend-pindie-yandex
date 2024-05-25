"use client";
import React from "react";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

const Runners = () => {
    const runnersGames = useGetDataByCategory(endpoints.games, "runner");

    return (
        <main className={"main-inner"}>
            {runnersGames ? (
                <CardsListSection
                    id="runner"
                    title="Раннеры"
                    data={runnersGames}
                />
            ) : (
                <Preloader />
            )}
        </main>
    );
};

export default Runners;
