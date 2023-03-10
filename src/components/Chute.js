import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  height: 4rem;
`;

const Input = styled.input`
  height: 100%;
  width: 35rem;
  padding-inline: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1.6rem;

  &:focus {
    outline: transparent;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  height: 100%;
  padding-inline: 2rem;
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  user-select: none;
  color: #7aa7c7;
  background-color: #e1ecf4;
  transition: all 100ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(105%);
    transition: all 100ms ease;
  }

  &:disabled {
    color: #798a9f;
    background-color: #9faab5;
  }

  &:hover:disabled {
    cursor: not-allowed;
    transform: none;
  }
`;

export default function Chute({
  gameActive,
  setGameActive,
  wordArray,
  unaccentedWordArray,
  guessedLetters,
  setGuessedLetters,
  inputValue,
  setInputValue,
  setWordGuessed,
  failCount,
  setFailCount,
}) {
  function isWordRevealed() {
    return unaccentedWordArray.every((char) => guessedLetters.includes(char));
  }

  function isInputDisabled() {
    return isWordRevealed() || !gameActive || failCount === 6;
  }

  function isButtonDisabled() {
    return isWordRevealed() || inputValue === "" || failCount === 6;
  }

  function guessWord() {
    if (inputValue.toLowerCase() !== wordArray.join("")) {
      setFailCount(6);
    }

    setWordGuessed(inputValue);
    setGameActive(false);
    setGuessedLetters(unaccentedWordArray);
  }

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Já sabe a palavra? Dê um chute!"
        value={inputValue}
        disabled={isInputDisabled()}
        onChange={(e) => setInputValue(e.target.value.trim())}
        onKeyUp={(e) => e.key === "Enter" && guessWord()}
        data-test="guess-input"
      />
      <Button
        disabled={isButtonDisabled()}
        onClick={guessWord}
        data-test="guess-button"
      >
        Chutar
      </Button>
    </InputContainer>
  );
}
