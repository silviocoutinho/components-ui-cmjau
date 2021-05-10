import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  message: string;
  type: string;
  textAlign?: string;
}
