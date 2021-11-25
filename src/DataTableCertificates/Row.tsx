import React from 'react';

const formatLine = value => {
  return value % 2 == 0 ? 'class-even' : 'class-odd';
};

const Row = ({ record, position }) => {
  const keys = Object.keys(record);  

  const getStatus = (status) => {
    if (status == null) {
      return <div className="warning">Aguardando</div>;
    }
    return status == 0 ? <div className="danger">Recusado</div> : <div className="success">Aceito</div>;
  };

  return (
    <tr key={record.dia} className={formatLine(position)}>
      <td key="processo">{record['processo']}</td>
      <td key="curso">{record['curso']}</td>
      <td key="entidade">{record['entidade']}</td>
      <td key="carga_horaria">{record['carga_horaria']}h</td>
      <td key="data_emissao_certificado">{record['data_emissao_certificado']}</td>
      <td key="aceito">{ getStatus(record['aceito']) }</td>
      <td key="data_aceite">{record['data_aceite']}</td>
      <td key="motivo_fim">{record['motivo_fim']}</td>     
    </tr>
  );
};

export default Row;
