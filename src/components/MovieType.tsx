import {Button} from "@chakra-ui/react";


interface Props {
    types : string[];
    onSelectType : (type : string) => void;
}

export const MovieType = ({types, onSelectType} : Props) => {

    return (
        <>
            {types.map(t => <Button onClick={() => onSelectType(t)}>{t}</Button>)}
        </>
    );
};

