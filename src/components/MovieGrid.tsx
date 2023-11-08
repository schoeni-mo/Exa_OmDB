import {SimpleGrid, Text} from "@chakra-ui/react";
import useMovies from "../hooks/useMovies.ts";
import MovieCard from "./MovieCard.tsx";


interface Props {
    selectedYear : number;
    selectedType : string;
    search : string;
}
export const MovieGrid = ({selectedYear, selectedType, search} : Props) => {

    const {movies, error} = useMovies(selectedYear, selectedType, search);

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid bg={'orange'} columns={{sm:1, md:2, lg:3, xl:4}} padding={10} spacing={10}>
                {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>)}
            </SimpleGrid>
        </>
    );
}

