import React, { useRef } from 'react';
import { Props } from './PayslipTable.types';
import { Wrapper } from './PayslipTable.styles';

import Row from './Row';
import Head from './Head';

const PayslipTable = ({ data, head, pathToFile, ...rest }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const keys = Object.keys(data[0]);

  return (
    <Wrapper>
      <div>
        <table>
          <Head keys={keys} head={head} />
          <tbody>
            {data.map((record, index) => (
              <Row record={record} position={index} path={pathToFile} />
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default PayslipTable;

/*

referencia: '05/2021',
    tipo: 'Mensal',
    link: 'holerite05.pdf', 

*/
