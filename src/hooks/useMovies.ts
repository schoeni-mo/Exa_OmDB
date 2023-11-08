import {useEffect, useState} from "react";
import {IFetchMovieResponse, IMovie} from "../common/models.ts";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

const UseMovies = (year : number, type : string, search : string) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [error, setError] = useState<undefined | string>();

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<IFetchMovieResponse>('', {signal: controller.signal, params : { y : year, type : type, s: search}})
            .then(res => setMovies(res.data.Search))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return() => controller.abort();
    }, [year, type, search]);
    return {movies, error};
};

export default UseMovies;