import styled, { css } from 'styled-components';

interface InputProps {
  readonly align: string;
}

export const Wrapper = styled.div<InputProps>`
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1;

  div {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem 1.25rem;
    font-size: 0.75rem;
    font-weight: bold;
    text-align: ${props => (props.align ? props.align : 'left')};
    border-radius: 0.5rem;
  }

  .primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  }

  .success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  .danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
`;
