import styled, { css } from 'styled-components';
import { light as theme } from '../styles/theme';

interface ButtonProps {
 
}

export const Wrapper = styled.div<ButtonProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  
  button {
    grid-row: 1;
    grid-column: 2/3;
    cursor: pointer;

    color: #fff;
    border-radius: 0.25rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 500;
   
    padding: 0.25rem;
    padding-left: 0.25rem;
    margin: 0.25rem;
    
  }

  .primary {
      background-color: #006fe6;   
      border: 1px solid #006fe6;

      &:hover {background-color: #1a88ff}

      &:active {
        background-color: #1a88ff;
        box-shadow: 0 2px #666;
        transform: translateY(1px);
      }
  }

  .success {
      background-color: #23903c;   
      border: 1px solid #23903c;

      &:hover {background-color: #28a745}

      &:active {
        background-color: #28a745;
        box-shadow: 0 2px #666;
        transform: translateY(1px);
      }
  }

  .danger {
      background-color: #c32232;   
      border: 1px solid #c32232;

      &:hover {background-color: #dc3545}

      &:active {
        background-color: #dc3545;
        box-shadow: 0 2px #666;
        transform: translateY(1px);
      }
  }

  .warning {
      background-color: #e6ac00;   
      border: 1px solid #e6ac00;

      &:hover {background-color: #ffc107}

      &:active {
        background-color: #ffc107;
        box-shadow: 0 2px #666;
        transform: translateY(1px);
      }
  }

  .info {
      background-color: #148c9f;   
      border: 1px solid #148c9f;

      &:hover {background-color: #17a2b8}

      &:active {
        background-color: #17a2b8;
        box-shadow: 0 2px #666;
        transform: translateY(1px);
      }
  }

  .dark {
      background-color: #343a40;   
      border: 1px solid #343a40;

      &:hover {background-color: #454d54}

      &:active {
        background-color: #454d54;
        box-shadow: 0 2px #b3b3b3;
        transform: translateY(1px);
      }
  }

`;
