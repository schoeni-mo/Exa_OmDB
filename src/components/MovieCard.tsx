import {IMovie} from "../common/models.ts";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";


interface Props {
    movie : IMovie
}
const MovieCard = ({movie} : Props) => {
    return (
        <Card>
            <Image src={movie.Poster}/>
            <CardBody>
                <Heading>{movie.Title}</Heading>
            </CardBody>
        </Card>
    );
};

export default MovieCard;