export interface IMovie {
    Title: string;
    Year: number;
    imdbID: string;
    Poster: string;
    Type: string;
}

export interface IFetchMovieResponse {
    Search: IMovie[];
    totalResults: number;
}
