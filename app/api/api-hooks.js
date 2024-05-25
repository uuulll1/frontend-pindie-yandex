import { useState, useEffect } from "react";
import { getNormalizedGamesDataByCategory, isResponseOk } from "./api-utils";

export const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const data = await getNormalizedGamesDataByCategory(
                endpoint,
                category
            );
            setData(data);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (isResponseOk(data)) {
        return data;
    }
};
