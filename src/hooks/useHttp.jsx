// import { useEffect, useState } from "react"
// import { fetchMovies } from '../api'

// export const useHttp = (fn, param) => {
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         fn(param)
//       .then(data => setData(data.results))
//       .catch(err => setError(err.message));
//     }, [fn, param])
//     return [data, setData, error]
// }






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