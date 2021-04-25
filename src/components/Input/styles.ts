import styled from 'styled-components';
import { light as theme } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: 1px solid ${theme.colors.border};
    border-radius: 0.25rem;
    height: 1.5rem;
    padding: 0.25rem;

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
    font-size: 14px;
    color: ${theme.colors.label};
    text-align: left;
    margin-bottom: 6px;
    margin-top: 12px;
  }
  span {
    display: flex;
    flex-direction: column;
    color: ${theme.colors.error};
    align-self: flex-start;
    margin-top: 3px;
    font-size: 14px;
    font-weight: bold;
  }
  .alert {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    padding: 0.75rem 1.25rem;
  }
`;
