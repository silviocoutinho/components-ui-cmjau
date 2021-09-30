import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';

const formatLine = value => {
  return value % 2 == 0 ? 'class-even' : 'class-odd';
};

const Row = ({ record, position, path }) => {
  const keys = Object.keys(record);
  console.log(record);
  return (
    <tr key={record.dia} className={formatLine(position)}>
      <td key="referencia">{record['referencia']}</td>
      <td key="tipo">{record['tipo']}</td>
      <td key="link">
        <a href={path + '/' + record['link']}>
          <FaRegFilePdf />
        </a>
      </td>
    </tr>
  );
};

export default Row;
