import { createContext, useMemo } from "react";
import useLocalStorage from "../../../joga-facil-vite/src/hooks/useLocalStorage";

export const GameContext = createContext({});

export const GameProvider = ({ children }) => {

  const initialState = {
    boardState: ["", "", "", "", "", ""],
    evaluations: [null, null, null, null, null, null],
    gameStatus: "IN_PROGESS",
    hardMode: false,
    lastCompletedTs: null,
    lastPlayedTs: null,
    restoringFromLocalStorage: null,
    rowIndex: 0,
    solution: "frame"
  };

  const [gameState, setGameState] = useLocalStorage("wordleGameState", initialState);

  const memoedValue = useMemo(() => ({
    gameState,
    setGameState
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [gameState]);

  return (
    <GameContext.Provider value={memoedValue}>
      {children}
    </GameContext.Provider>
  );
}