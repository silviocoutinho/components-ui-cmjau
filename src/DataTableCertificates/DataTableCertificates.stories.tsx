import React from 'react';

import DataTableCertificates from './DataTableCertificates';

const data = [
  {
    processo: '001',
    curso: 'Ética no servico Publico ',
    entidade: 'UFScar',
    carga_horaria: '20',
    data_emissao_certificado: '12/12/2020',
    aceito: true,
    data_aceite: '20/12/2020',
    motivo_fim: 'CACOF',
   
  },
  {
    processo: '003',
    curso: 'Governacao de Dados ',
    entidade: 'ENAP',
    carga_horaria: '10',
    data_emissao_certificado: '11/08/2020',
    aceito: null,
    data_aceite: '20/09/2020',
    motivo_fim: 'CACOF 3',
   
  },
  {
    processo: '008',
    curso: 'Estatística',
    entidade: 'UFScar',
    carga_horaria: '25',
    data_emissao_certificado: '05/09/2021',
    aceito: true,
    data_aceite: '20/10/2021',
    motivo_fim: 'CACOF 4',
    
  },
  {
    processo: '009',
    curso: 'Curso de Moda',
    entidade: 'Cantinho da moda',
    carga_horaria: '2',
    data_emissao_certificado: '05/09/2021',
    aceito: false,
    data_aceite: '20/10/2021',
    motivo_fim: 'CACOF 4',
    
  },
];

const head = {
  processo: 'Processo',
  curso: 'Curso',
  entidade: 'Entidade',
  carga_horaria: 'Carga Horária',
  data_emissao_certificado: 'Data Emissão',
  aceito: 'Status',
  data_aceite: 'Data do Aceite / Recusa',
  motivo_fim: 'Motivo Fim do Curso',
};

export default {
  title: 'forms/DataTableCertificates',
  component: DataTableCertificates,
};

export const Basic = args => (
  <DataTableCertificates
    data={data}
    head={head}   
    {...args}
  />
);
Basic.args = {};
