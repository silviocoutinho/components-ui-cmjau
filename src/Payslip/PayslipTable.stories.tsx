import React from 'react';

import PayslipTable from './PayslipTable';

const data = [
  {
    referencia: '05/2021',
    tipo: 'Mensal',
    link: '2021-09-27_01.jpg',
  },
  {
    referencia: '06/2021',
    tipo: 'Mensal',
    link: '2021-09-27_01.jpg',
  },
  {
    referencia: '06/2021',
    tipo: 'Adiantamento 13',
    link: '2021-09-27_01.jpg',
  },
  {
    referencia: '07/2021',
    tipo: 'Mensal',
    link: '2021-09-27_01.jpg',
  },
];

const head = {
  referencia: 'Referência',
  tipo: 'Tipo de Holerite',
  link: 'Download',
};

export default {
  title: 'forms/Payslip',
  component: PayslipTable,
};

export const Basic = args => (
  <PayslipTable
    data={data}
    head={head}
    pathToFile={'http://www.camarajau.sp.gov.br/images/Imagens/Noticias2021'}
    {...args}
  />
);
Basic.args = {};
