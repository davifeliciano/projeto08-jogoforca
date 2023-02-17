import styled from "styled-components";
import imagens from "../imagens";

const StyledJogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 46rem;
  padding-inline: 8rem;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  user-select: none;
  -webkit-user-drag: none;
`;

const WordSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding-block: 3rem;
`;

const Button = styled.button`
  height: 6rem;
  padding-inline: 2rem;
  border: none;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 700;
  user-select: none;
  color: white;
  background-color: #27ae60;
  transition: all 100ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(105%);
    transition: all 100ms ease;
  }
`;

const Word = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 5rem;
  font-weight: 700;
  word-break: break-all;
  user-select: none;
  color: ${(props) => {
    const { wordArray, wordGuessed, failCount } = props;
    if (failCount === 6) return "red";
    if (wordGuessed === null) return "unset";
    if (wordGuessed !== wordArray) return "red";
    return "green";
  }};
`;

export default function Jogo({
  setGameActive,
  wordArray,
  setWordArray,
  guessedLetters,
  setGuessedLetters,
  wordGuessed,
  setWordGuessed,
  failCount,
}) {
  const { src, alt } = imagens[failCount];

  return (
    <StyledJogo>
      <Image src={src} alt={alt} />
      <WordSection>
        <Button>Escolher Palavra</Button>
        <Word
          wordArray={wordArray}
          guessedLetters={guessedLetters}
          wordGuessed={wordGuessed}
          failCount={failCount}
        ></Word>
      </WordSection>
    </StyledJogo>
  );
}
