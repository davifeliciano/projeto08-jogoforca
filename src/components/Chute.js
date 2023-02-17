import { useState } from "react";
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
  color: ${(props) => (props.disabled ? "#798a9f" : "#7aa7c7")};
  background-color: ${(props) => (props.disabled ? "#9faab5" : "#e1ecf4")};
  transition: all 100ms ease;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transform: ${(props) => (props.disabled ? "unset" : "scale(105%)")};
    transition: all 100ms ease;
  }
`;

export default function Chute() {
  const [input, setInput] = useState("");

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Já sabe a palavra? Dê um chute!"
        onChange={(e) => setInput(e.target.value.trim())}
      />
      <Button disabled={input === ""}>Chutar</Button>
    </InputContainer>
  );
}