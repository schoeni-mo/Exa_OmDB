import {Button, Input} from "@chakra-ui/react";


interface Props {
    onChangeSearch : (s : string) => void;
}

const MovieSearch = ({onChangeSearch} : Props) => {

    const changeSearch = () => {
        const search : string = (document.querySelector("#search") as HTMLInputElement).value;
        console.log(search);
        onChangeSearch(search);
        (document.querySelector("#search") as HTMLInputElement).value = "";
    }
    return (
        <>
            <Input id={"search"} placeholder={"Search ..."}></Input>
            <Button onClick={() => changeSearch()}>Search</Button>
        </>
    );
};

export default MovieSearch;