import styled, { css } from 'styled-components';

interface InputProps {}

export const Wrapper = styled.div<InputProps>`
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1;

  .link-file {
    &:hover {
      color: #721c24;
    }

    &:active {
      color: #1a88ff;
      box-shadow: 0 2px #666;
      transform: translateY(1px);
    }
  }

  table {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;

    border: 1px solid #b3b3b3;
    width: 100%;
    border-collapse: collapse;

    .class-even {
      background-color: #f2f2f2;
    }
    .class-odd {
      background-color: #e6e6e6;
    }

    th {
      font-weight: bold;
      text-align: center;
      font-size: 1.125rem;
      border: 1px solid #b3b3b3;
      background-color: #cccccc;
      border-left: none;
      border-right: none;
    }

    td {
      font-weight: 300;
      text-align: center;
      font-size: 1.125rem;
      border: 1px solid #b3b3b3;
      border-left: none;
      border-right: none;

      a {
        color: #000;
        text-decoration: none;
        font-size: 1.5rem;
        border: 1px solid #b3b3b3;
      }

      .danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        border: 1px solid #721c24;
      }

      .success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
        border: 1px solid #155724;
      }

      .advisory {
        color: #804d00;
        background-color: #ffb84d;
        border-color: #ffa31a;
        border: 1px solid #804d00;
      }

      .warning {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
        border: 1px solid #856404;
      }
    }
  }
`;
