"use client";
import React from "react";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

const PixelGames = () => {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

    return (
        <main className={"main-inner"}>
            {pixelGames ? (
                <CardsListSection
                    id="pixel"
                    title="Пиксельные"
                    data={pixelGames}
                />
            ) : (
                <Preloader />
            )}
        </main>
    );
};

export default PixelGames;
