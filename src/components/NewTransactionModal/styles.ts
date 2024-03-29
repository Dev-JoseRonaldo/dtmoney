import styled from "styled-components";
import { darken , transparentize } from 'polished';

export const Container = styled.form`

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    color: var(--text-input);
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--border-input);
    background: var(--background-input);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-input);
    }

    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--secundary);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  @media(max-width: 400px) {
    grid-template-columns: 1fr;
  }

`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}


const colors = {
  green: '#33cc95',
  red: '#e52e40'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid var(--border-input);
  border-radius: 0.25rem;

  background: ${(props) => props.isActive
   ? transparentize(0.6,colors[props.activeColor] )
   : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-input);
  }
`