import { HTMLAttributes } from 'react';

export interface Props {
  data: Array<{
    
    processo: string,
    curso: string,
    entidade: string,
    carga_horaria: string,
    data_emissao_certificado: string,
    aceito: boolean,
    data_aceite: string,
    motivo_fim: string,
           
  }>;
  head: any;
  
  
}
