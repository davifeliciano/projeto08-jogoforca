import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`;

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
  const [unaccentedWordArray, setUnaccentedWordArray] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [wordGuessed, setWordGuessed] = useState(null);
  const [failCount, setFailCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo
          setGameActive={setGameActive}
          wordArray={wordArray}
          setWordArray={setWordArray}
          unaccentedWordArray={unaccentedWordArray}
          setUnaccentedWordArray={setUnaccentedWordArray}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          setInputValue={setInputValue}
          wordGuessed={wordGuessed}
          setWordGuessed={setWordGuessed}
          failCount={failCount}
          setFailCount={setFailCount}
        />
        <Letras
          gameActive={gameActive}
          unaccentedWordArray={unaccentedWordArray}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          failCount={failCount}
          setFailCount={setFailCount}
        />
        <Chute
          gameActive={gameActive}
          setGameActive={setGameActive}
          wordArray={wordArray}
          unaccentedWordArray={unaccentedWordArray}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setWordGuessed={setWordGuessed}
          failCount={failCount}
          setFailCount={setFailCount}
        />
      </Container>
    </>
  );
}
