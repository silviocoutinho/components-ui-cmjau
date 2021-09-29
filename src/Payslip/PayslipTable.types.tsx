import { HTMLAttributes } from 'react';

export interface Props {
  data: Array<{
    referencia: string;
    tipo: string;
    link: string;        
  }>;
  head: any;
  pathToFile: string;
  
}
/*

referencia: '2021-07-05',
    tipo: '08:01',
    link: '12:10',    

*/
