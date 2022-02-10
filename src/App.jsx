import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faTrash,
  faCheck,
  faUser,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import Board from "./components/Board/Board";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard/Keyboard";
import useGame from "./hooks/useGame";

library.add(faEdit, faTrash, faCheck, faUser, faTimes, faPlus);

function App() {

  const [currentRow, setCurrentRow] = useState(1);
  const [deleted, setDeleted] = useState(false);
  const [currentWord, setCurrentWord] = useState("");

  const { nextWordCountdown, verifyGuess, setError } = useGame();
  
  const wordRef = useRef();

  wordRef.current = currentWord;

  const handleKeyDown = (e) => {
    const regEx = /^([a-zA-Z]{1})$/;
    const key = e.key;

    if (key.match(regEx) || key === "Enter" || key === "Backspace") {
      if (key === "Enter") {
        verifyGuess(wordRef.current);
        nextWordCountdown();
      }
      else if (key === "Backspace") {
        setCurrentWord(wordRef.current.substring(0, wordRef.current.length - 1));
        setDeleted(true);
        setError(null);
      } else {
        if (wordRef.current.length < 5) {
          setCurrentWord((prevCurrWord) => {
            return prevCurrWord + key;
          });
        }
        setDeleted(false);
        setError(null);
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen w-full mx-auto my-0 max-w-[500px]">
      <Header />
      <Board currentRow={currentRow} guess={currentWord} deleted={deleted} />
      <Keyboard />
    </div>
  )
}

export default App
