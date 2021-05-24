import styled, { css } from 'styled-components';

interface Props {
 
  readonly columns: number;
}

export const Wrapper = styled.div<Props>`
  font-family: 'Titillium Web', sans-serif;

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
    background-color: transparent;
    padding: 1rem;
  }

  .grid-container > div {
    background-color: transparent;
    text-align: center;
  }

  select {
    display: flex;
    flex-direction: column;
    padding: 0rem;
  }

  button {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: auto;
  }



`;
