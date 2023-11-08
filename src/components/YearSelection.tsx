import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";


interface Props {
    selectedYear : number;
    onSelectYear : (year : number) => void;
}

export const YearSelection = ({selectedYear, onSelectYear} : Props) => {

    const years : number[] = [...Array(33).keys()].map(y => 2023 - y);

    return (
        <Menu>
            <MenuButton><Button>{selectedYear || 'Choose Year'}</Button></MenuButton>
            <MenuList>
                {years.map(year => <MenuItem onClick={() => onSelectYear(year)}>{year}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

