"use client";
import React from "react";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

const TDS = () => {
    const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

    return (
        <main className={"main-inner"}>
            {tdsGames ? (
                <CardsListSection id="tds" title="TDS" data={tdsGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
};

export default TDS;
