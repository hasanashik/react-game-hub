import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id}></GameTrailer>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
