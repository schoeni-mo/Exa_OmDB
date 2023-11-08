

import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {MovieGrid} from "./components/MovieGrid.tsx";
import {YearSelection} from "./components/YearSelection.tsx";
import {useState} from "react";
import {MovieType} from "./components/MovieType.tsx";
import MovieSearch from "./components/MovieSearch.tsx";

function App() {

    const types : string[] = ["movie", "series"];
    const [selectedYear, setSelectedYear]  = useState<number>(2023);
    const [selectedType, setSelectedType] = useState<string>("movie");
    const [search, setSearch] = useState<string>("galaxy");

  return (
    <>
        <Grid templateAreas={
            { base:`"nav main"`,
                lg: `"nav nav" "aside main"`}}>
            <GridItem area={'nav'} bg={'blue'}>
                <p>Navbar</p>
            </GridItem>
            <Show above={'lg'}>
                <GridItem bg={'grey'} area={'aside'}>
                    <YearSelection selectedYear={selectedYear} onSelectYear={setSelectedYear}/>
                    <br></br>
                    <MovieType types={types} onSelectType={setSelectedType}/>
                    <br/>
                    <MovieSearch onChangeSearch={setSearch}/>
                </GridItem>
            </Show>
            <GridItem area={'main'}>
                <MovieGrid selectedYear={selectedYear} selectedType={selectedType} search={search}/>
            </GridItem>
        </Grid>
    </>
  )
}

export default App
