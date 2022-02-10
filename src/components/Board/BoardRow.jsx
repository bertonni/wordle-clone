// import { AnimatePresence, motion } from "framer-motion";
import Tile from "./Tile";

export default function BoardRow({ letters, length, row, currentRow, deleted }) {
  const word = ["", "", "", "", ""];
  const values = letters.split("");

  for (let i = 0; i < values.length; i++) {
    word[i] = values[i];
  }
  return (
      <div className="flex items-center gap-[5px]">
        {word.map((letter, index) => {
          return index === length - 1 && letter !== "" && currentRow == row && !deleted ? (
            <Tile
              animate
              key={index}
              letter={letter}
              state={"tdb"}
              test
            />
          ) : letter !== "" ? (
            <Tile key={index} letter={letter} state={"tdb"} />
          ) : (
            <Tile key={index} letter={letter} state={"empty"} />
          );
        })}
      </div>
  );
}
