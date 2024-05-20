import React from 'react'
import useTrailers from '../hooks/useTrailers'

interface Props{
    gameId: number;

}
const GameTrailer = ( { gameId } :Props ) => {
    const {data, error, isLoading} = useTrailers(gameId);
    console.log(data);
  return (
    <div>GameTrailer</div>
  )
};

export default GameTrailer