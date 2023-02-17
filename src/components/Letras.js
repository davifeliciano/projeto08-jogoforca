import styled from "styled-components";

const Letters = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;
`;

const Letter = styled.button`
  width: 4rem;
  height: 4rem;
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 700;
  user-select: none;
  color: ${(props) => (props.disabled ? "#798a9f" : "#7aa7c7")};
  background-color: ${(props) => (props.disabled ? "#9faab5" : "#e1ecf4")};
  transition: all 100ms ease;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transform: ${(props) => (props.disabled ? "unset" : "scale(105%)")};
    transition: all 100ms ease;
  }
`;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Letras({
  gameActive,
  unaccentedWordArray,
  guessedLetters,
  setGuessedLetters,
  failCount,
  setFailCount,
}) {
  function isDisabled(letter) {
    return (
      unaccentedWordArray.every((char) => guessedLetters.includes(char)) ||
      guessedLetters.includes(letter) ||
      !gameActive ||
      failCount === 6
    );
  }

  function guessLetter(letter) {
    setGuessedLetters([...guessedLetters, letter]);
    if (!unaccentedWordArray.includes(letter)) {
      setFailCount(failCount + 1);
    }
  }

  return (
    <Letters>
      {alphabet.map((letter) => (
        <Letter
          key={letter}
          disabled={isDisabled(letter)}
          onClick={() => guessLetter(letter)}
        >
          {letter}
        </Letter>
      ))}
    </Letters>
  );
}
