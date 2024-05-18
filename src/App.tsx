import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelectors from "./components/PlatformSelectors";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameHeading></GameHeading>
        <HStack spacing={5} paddingBottom={5} paddingLeft={5} paddingTop={5}>
          <PlatformSelectors></PlatformSelectors>
          <SortSelector></SortSelector>
        </HStack>

        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
