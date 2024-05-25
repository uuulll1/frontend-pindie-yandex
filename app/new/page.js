"use client";
import React from "react";
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

const New = () => {
    const newGames = useGetDataByCategory(endpoints.games, "new");

    return (
        <main className={"main-inner"}>
            {newGames ? (
                <CardsListSection id="new" title="Новинки" data={newGames} />
            ) : (
                <Preloader />
            )}
        </main>
    );
};

export default New;
