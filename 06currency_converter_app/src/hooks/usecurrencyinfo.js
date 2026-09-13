import { useEffect, useState } from "react";

function useCurrencyInfo(paisa) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${paisa}.json`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res[paisa]);
            })
            .catch((error) => {
                console.log("Error:", error);
                setData({});
            });
    }, [paisa]);

    return data;
}

export default useCurrencyInfo;