import React, { useRef } from 'react';
import { Props } from './PayslipTable.types';
import { Wrapper } from './PayslipTable.styles';

import DataTable from '../DataTable/DataTable';

const PayslipTable = ({ data, head, pathToFile,  ...rest }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);
  
  const getDayOfWeek = date => {
    const dayOfWeek = new Date(date).getDay() + 1;
    return isNaN(dayOfWeek)
      ? null
      : ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][
          dayOfWeek
        ];
  };

  const getLinkToPayslip = (path, file) => {
    return `${path}/${file}`;
  }

  const dataFormated = data.map(element => {
    const { link, ...rest } = element;
    if (link) {
      return {       
        ...rest, link: getLinkToPayslip(pathToFile, link)     
      };
    } else {
      return {
        ...rest, link: 'Arquivo ainda não disponibilizado!'        
        ,
      };
    }
  });

  const keys = Object.keys(dataFormated[0]);

  return (
    <Wrapper>
      <div>
        <DataTable data={dataFormated} head={head} />
      </div>
    </Wrapper>
  );
};

export default PayslipTable;
