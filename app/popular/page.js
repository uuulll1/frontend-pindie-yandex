"use client";
import React from "react";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

const Popular = () => {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");

    return (
        <main className={"main-inner"}>
            {popularGames ? (
                <CardsListSection
                    id="popular"
                    title="Популярные"
                    data={popularGames}
                />
            ) : (
                <Preloader />
            )}
        </main>
    );
};

export default Popular;
