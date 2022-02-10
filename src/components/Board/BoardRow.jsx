import { motion } from "framer-motion";
import Tile from "./Tile";

const variants = {
  initial: { x: 0 },
  animate: { x: [-2, 2, -2, 2, -2, 2, 0], transition: { duration: 0.4 } }
}

export default function BoardRow({
  letters,
  length,
  row,
  error,
  currentRow,
  deleted,
}) {

  const word = ["", "", "", "", ""];
  const values = letters.split("");

  for (let i = 0; i < values.length; i++) {
    word[i] = values[i];
  }
  return error && row === currentRow ? (
    <motion.div
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      className="flex items-center gap-[5px]"
    >
      {word.map((letter, index) => {
        return index === length - 1 &&
          letter !== "" &&
          currentRow == row &&
          !deleted ? (
          <Tile animate key={index} letter={letter} state={"tdb"} length={letters.length} />
        ) : letter !== "" ? (
          <Tile key={index} letter={letter} state={"tdb"} />
        ) : (
          <Tile key={index} letter={letter} state={"empty"} />
        );
      })}
    </motion.div>
  ) : (
    <div className="flex items-center gap-[5px]">
      {word.map((letter, index) => {
        return index === length - 1 &&
          letter !== "" &&
          currentRow == row &&
          !deleted ? (
          <Tile animate key={index} letter={letter} state={"tdb"} test />
        ) : letter !== "" ? (
          <Tile key={index} letter={letter} state={"tdb"} />
        ) : (
          <Tile key={index} letter={letter} state={"empty"} />
        );
      })}
    </div>
  );
}
