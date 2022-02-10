// import { useEffect, useState } from 'react';
import useGame from '../../hooks/useGame';
import BoardRow from './BoardRow';

export default function Board({ guess, currentRow, deleted }) {

  const { gameState, error } = useGame();

  return (
    <div className='flex flex-grow items-center justify-center overflow-hidden pointer-events-none'>
      <div className='grid grid-rows-6 gap-[5px] p-2 box-border w-87 h-105'>
        <BoardRow
          row={1}
          currentRow={currentRow}
          letters={guess}
          length={guess.length}
          deleted={deleted}
          error={error}
        />
        <BoardRow
          row={2}
          currentRow={currentRow}
          letters={gameState.boardState[1]}
          length={guess.length}
          deleted={deleted}
          error={error}
        />
        <BoardRow
          row={3}
          currentRow={currentRow}
          letters={gameState.boardState[2]}
          length={guess.length}
          deleted={deleted}
          error={error}
        />
        <BoardRow
          row={4}
          currentRow={currentRow}
          letters={gameState.boardState[3]}
          length={guess.length}
          deleted={deleted}
          error={error}
        />
        <BoardRow
          row={5}
          currentRow={currentRow}
          letters={gameState.boardState[4]}
          length={guess.length}
          deleted={deleted}
          error={error}
        />
        <BoardRow
          row={6}
          currentRow={currentRow}
          letters={gameState.boardState[5]}
          length={guess.length}
          deleted={deleted}
          error={error}
        />
      </div>
    </div>
  );
}
