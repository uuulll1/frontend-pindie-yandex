"use client";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardsList/CardsList";
import chalk from "chalk";
import { getNormalizedGamesDataByCategory } from "./api/api-utils";
import { endpoints } from "./api/config";
import { CardsListSection } from "./components/CardsList/CardsListSection";
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./components/Preloader/Preloader";

const Home = () => {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    const newGames = useGetDataByCategory(endpoints.games, "new");
    // console.log(popularGames);

    console.log(chalk.bgCyan("внесли баги, Босс, ждем оценки"));

    return (
        <div>
            <main className="main">
                <Banner />
                {popularGames ? (
                    <CardsListSection
                        id="popular"
                        title="Популярные"
                        data={popularGames}
                    />
                ) : (
                    <Preloader />
                )}
                {newGames ? (
                    <CardsListSection id="new" title="Новые" data={newGames} />
                ) : (
                    <Preloader />
                )}
                <Promo />
            </main>
        </div>
    );
};

export default Home;
