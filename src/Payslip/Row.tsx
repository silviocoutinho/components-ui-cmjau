import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import { saveAs } from 'file-saver';

const formatLine = value => {
  return value % 2 == 0 ? 'class-even' : 'class-odd';
};

const Row = ({ record, position, path }) => {
  const keys = Object.keys(record);
  const payslipPDF = path + '/' + record['link'];

  const getPayslipPDF = () => {
    saveAs(payslipPDF, record['link']);
  };

  return (
    <tr key={record.dia} className={formatLine(position)}>
      <td key="referencia">{record['referencia']}</td>
      <td key="tipo">{record['tipo']}</td>
      <td key="link">
        <a
          className="link-file"
          href="javascript:void(0);"
          onClick={getPayslipPDF}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <FaRegFilePdf />
        </a>
      </td>
    </tr>
  );
};

export default Row;
