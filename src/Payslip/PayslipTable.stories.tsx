import React from 'react';

import PayslipTable from './PayslipTable';

const data = [
  {
    referencia: '05/2021',
    tipo: 'Mensal',
    link: 'holerite05.pdf',    
  },  
  {
    referencia: '06/2021',
    tipo: 'Mensal',
    link: 'holerite06.pdf',    
  },
  {
    referencia: '06/2021',
    tipo: 'Adiantamento 13',
    link: 'holerite13-1.pdf',    
  },
  {
    referencia: '07/2021',
    tipo: 'Mensal',
    link: 'holerite07.pdf',    
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
  <PayslipTable data={data} head={head} pathToFile={'http://www.test.com'} {...args} />
);
Basic.args = {};
