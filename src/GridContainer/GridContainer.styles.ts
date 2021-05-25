import styled, { css } from 'styled-components';

interface Props {
  readonly columns: number;
}

export const Wrapper = styled.div<Props>`
  font-family: 'Titillium Web', sans-serif;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  background-color: transparent;
  padding: 1rem;

  div {
    background-color: transparent;
    text-align: center;
  }

  .select-container {
    display: flex;
    flex-direction: column;
    padding: 0rem;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;
