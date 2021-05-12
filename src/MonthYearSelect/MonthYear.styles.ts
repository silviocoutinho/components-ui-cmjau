import styled, { css } from 'styled-components';
import { light as theme } from '../styles/theme';

interface MonthYearProps {}

export const Wrapper = styled.div<MonthYearProps>`
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
    background-color: #00f;
    padding: 1rem;
  }

  .grid-container > div {
    background-color: #ff0;
    text-align: center;
    font-size: 30px;
  }

  .select-container {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }

  .button-container {
    display: flex;
    align-self: flex-end;
    padding: 1rem;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${theme.colors.label};
    text-align: left;
    margin-bottom: 6px;
    margin-top: 12px;
    margin-left: 6px;
  }

  input {
    grid-row: 1;
    grid-column: 1/3;

    border: 1px solid ${theme.colors.border};
    border-radius: 0.25rem;
    height: 1.5rem;
    padding: 0.25rem;

    margin-top: 1rem;

    padding-left: 1rem;

    &:focus {
      border-color: ${theme.colors.focusedBorder};
      background-color: ${theme.colors.focusedBackgroud};
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }

    &::placeholder {
      color: ${theme.colors.placeholder};
    }
  }

  span {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    padding: 0.5rem 0.5rem;

    color: ${theme.colors.error};
    font-size: 0.75rem;
    font-weight: bold;
  }
`;
