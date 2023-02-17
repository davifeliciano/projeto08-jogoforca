import { useState } from "react";
import styled from "styled-components";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  padding-top: 6rem;
  height: 100vh;
  min-width: 800px;
`;

export default function App() {
  const [gameActive, setGameActive] = useState(false);
  const [wordArray, setWordArray] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wordGuessed, setWordGuessed] = useState(null);
  const [failCount, setFailCount] = useState(0);

  return (
    <Container>
      <Jogo
        setGameActive={setGameActive}
        wordArray={wordArray}
        setWordArray={setWordArray}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        wordGuessed={wordGuessed}
        setWordGuessed={setWordGuessed}
        failCount={failCount}
      />
      <Letras
        gameActive={gameActive}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        failCount={failCount}
        setFailCount={setFailCount}
      />
      <Chute setWordGuessed={setWordGuessed} />
    </Container>
  );
}
