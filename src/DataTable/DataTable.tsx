import React, { useRef } from 'react';
import { Props } from './DataTable.types';
import { Wrapper } from './DataTable.styles';

import Row from './Row';
import Head from './Head';

const DataTable = ({ data, head, ...rest }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const keys = Object.keys(data[0]);

  return (
    <Wrapper>
      <div>
        <table>
          <Head keys={keys} head={head} />
          <tbody>
            {data.map((record, index) => (
              <Row record={record} position={index} />
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default DataTable;
