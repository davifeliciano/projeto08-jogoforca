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

const alphabetCodes = Array.from(Array(26)).map((_, i) => i + 65);
const alphabet = alphabetCodes.map((x) => String.fromCharCode(x));

export default function Letras({
  gameActive,
  guessedLetters,
  setGuesseedLetters,
  failCount,
  setFailCount,
}) {
  return (
    <Letters>
      {alphabet.map((letter) => (
        <Letter
          key={letter}
          disabled={guessedLetters.includes(letter) || !gameActive}
        >
          {letter}
        </Letter>
      ))}
    </Letters>
  );
}
