import { HTMLAttributes } from 'react';

export interface Props {
  data: Array<{
    dia: string;
    ent1: string;
    sai1: string;
    ent2: string;
    sai2: string;
    ent3: string;
    sai3: string;
  }>;
  head: any;
  workingTime: number;
}
