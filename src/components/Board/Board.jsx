import { useEffect, useState } from 'react';
import useGame from '../../hooks/useGame';
import BoardRow from './BoardRow';

export default function Board({ guess }) {

  const { gameState } = useGame();

  return (
    <div className='flex flex-grow items-center justify-center overflow-hidden'>
      <div className='grid grid-rows-6 gap-[5px] p-2 box-border w-87 h-105'>
        <BoardRow values={guess} />
        <BoardRow values={gameState.boardState[1]} />
        <BoardRow values={gameState.boardState[2]} />
        <BoardRow values={gameState.boardState[3]} />
        <BoardRow values={gameState.boardState[4]} />
        <BoardRow values={gameState.boardState[5]} />
      </div>
    </div>
  );
}
