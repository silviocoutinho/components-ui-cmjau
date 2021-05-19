import React from 'react';

const formatLine = (value) => {
  return value % 2 == 0 ? 'class-even' : 'class-odd';
}

const Row = ({ record, position }) => {
  const keys = Object.keys(record);  
  return(
    <tr key={record.dia} className={formatLine(position)}>
      { keys.map(key => <td key={key}>{record[key]}</td>) }
    </tr>
  );
}

export default Row;
