import styled, { css } from 'styled-components';

interface Props {
  readonly columns: 1 | 2 | 3;
}

export const Wrapper = styled.div<Props>`
  font-family: 'Titillium Web', sans-serif;
  display: grid;
  grid-template-columns: ${props => props ? 'auto '.repeat(props.columns): 'auto auto'};
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

  .input-container {
    display: flex;
    flex-direction: column;
    padding: .725rem;   
  }
  .label-container {
    display: flex;
    flex-direction: column;
    padding: .725rem;   
  }

  .button-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-self: end;
  }
`;
