import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faTrash,
  faCheck,
  faUser,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard/Keyboard";

library.add(faEdit, faTrash, faCheck, faUser, faTimes, faPlus);

function App() {

  const [currentWord, setCurrentWord] = useState([]);

  const handleKeyDown = (event) => {
    const regEx = /^([a-zA-Z]{1})$/;
    const key = event.key;
    if (key.match(regEx) || key === "Enter" || key === "Backspace") {
      if (key === "Enter") {
        verifyGuess(currentWord.join(""));
      } else if (key === "Backspace") {
        currentWord.pop();
        setCurrentWord(currentWord);
      } else {
        if (currentWord.length < 5) {
          setCurrentWord((prevCurrentWord) => {
            return [...prevCurrentWord, key];
          });
        }
      }
    }
  }
  
  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className="flex flex-col justify-center h-screen w-full mx-auto my-0 max-w-[500px]"
    >
      <Header />
      <Board guess={currentWord} />
      <Keyboard />
    </div>
  )
}

export default App
