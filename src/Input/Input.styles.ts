import styled, { css } from 'styled-components';
import { light as theme } from '../styles/theme';

interface InputProps {
  readonly hideLabel: boolean;
  readonly inputIcon: boolean;
  readonly isFocusedOrFilled: boolean;
}

export const Wrapper = styled.div<InputProps>`
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1;

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
  }

  svg {
    grid-row-start: 1;
    grid-column: 1;
    z-index: 2;
    margin-top: 0.45rem;
    margin-left: 0.25rem;
    color: ${props =>
      props.isFocusedOrFilled
        ? theme.colors.focusedIcon
        : theme.colors.placeholder};
  }

  input {
    grid-row: 1;
    grid-column: 1/3;

    border: 1px solid ${theme.colors.border};
    border-radius: 0.25rem;
    height: 1.5rem;
    padding: 0.25rem;

    margin-top: ${props => (props.hideLabel ? '28px' : '0px')};

    padding-left: ${props => (props.inputIcon ? '1.75rem' : '0.25rem')};

    font-size: 1rem;

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

  label {
    ${props =>
      props.hideLabel === false &&
      css`
        font-size: 1rem;
        font-weight: bold;
        color: ${theme.colors.label};
        text-align: left;
        margin-bottom: 6px;
        margin-top: 12px;
      `}
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
