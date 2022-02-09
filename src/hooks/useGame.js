import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function useGame() {
  return useContext(GameContext);
}
