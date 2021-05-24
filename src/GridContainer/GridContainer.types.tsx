import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns: number;  
  
}
