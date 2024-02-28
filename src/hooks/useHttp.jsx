import { useEffect, useState } from "react";

export const useHttp = (fn, param) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fn(param);
                setData(result);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [fn, param]);

    return [data, error];
};