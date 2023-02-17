import styled from "styled-components";
import imagens from "../imagens";
import palavras from "../palavras";

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
    const { wordArray, wordGuessed, failCount, displayedWord } = props;
    if (failCount === 6) return "red";
    if (!displayedWord.includes("_")) return "green";
    if (wordGuessed === null) return "unset";
    if (wordGuessed !== wordArray) return "red";
    return "green";
  }};
`;

export default function Jogo({
  setGameActive,
  wordArray,
  setWordArray,
  unaccentedWordArray,
  setUnaccentedWordArray,
  guessedLetters,
  setGuessedLetters,
  setInputValue,
  wordGuessed,
  setWordGuessed,
  failCount,
  setFailCount,
}) {
  const { src, alt } = imagens[failCount];

  function pickRandomWord() {
    const index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
  }

  function getUnaccentedWordArray(wordArray) {
    return wordArray.map((char) =>
      char
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace("ç", "c")
    );
  }

  function resetGame() {
    setGameActive(true);
    const wordArray = pickRandomWord().split("");
    setWordArray(wordArray);
    setUnaccentedWordArray(getUnaccentedWordArray(wordArray));
    setGuessedLetters([]);
    setInputValue("");
    setWordGuessed(null);
    setFailCount(0);
  }

  function getCorrectGuessedLettersIndexes() {
    const indexes = [];
    unaccentedWordArray.forEach((char, index) => {
      if (guessedLetters.includes(char)) {
        indexes.push(index);
      }
    });
    return indexes;
  }

  function getDisplayedWord() {
    if (failCount === 6) return wordArray.join("");
    const indexes = getCorrectGuessedLettersIndexes();
    const displayedWordArray = wordArray.map((char, index) => {
      if (indexes.includes(index)) {
        return char;
      }
      return "_";
    });
    return displayedWordArray.join("");
  }

  const displayedWord = getDisplayedWord();

  return (
    <StyledJogo>
      <Image src={src} alt={alt} />
      <WordSection>
        <Button onClick={resetGame}>Escolher Palavra</Button>
        <Word
          wordArray={wordArray}
          guessedLetters={guessedLetters}
          wordGuessed={wordGuessed}
          failCount={failCount}
          displayedWord={displayedWord}
        >
          {displayedWord}
        </Word>
      </WordSection>
    </StyledJogo>
  );
}
