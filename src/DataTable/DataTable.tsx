import React, { useState, useRef, useCallback } from 'react';
import { Props } from './DataTable.types';
import { Wrapper } from './DataTable.styles';

import Row from './Row';
import Head from './Head';

const DataTable = ({...rest }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      "dia": "2021-05-10",
      "ent1": "08:01",
      "sai1": "12:10",
      "ent2": "13:30",
      "sai2": "17:00",
    },
    {
      "dia": "2021-05-11",
      "ent1": "08:00",
      "sai1": "12:00",
      "ent2": "13:30",
      "sai2": "17:00",
    },
    {
      "dia": "2021-05-12",
      "ent1": "08:00",
      "sai1": "12:00",
      "ent2": "13:30",
      "sai2": "17:00",
    },
    {
      "dia": "2021-05-13",
      "ent1": "08:00",
      "sai1": "12:00",
      "ent2": "13:30",
      "sai2": "17:00",
    },
    {
      "dia": "2021-05-14",
      "ent1": "08:00",
      "sai1": "12:00",
      "ent2": "13:30",
      "sai2": "17:00",
    }
  ];


  const head = {
    ent1: 'Entrada 1',
    sai1: 'Saída 1',
    ent2: 'Entrada 2',
    sai2: 'Saída 2',
    dia: 'Data',
    diaDaSemana: 'Dia',
    total: 'Total'
  }

  const getDayOfWeek = (date) => {
    const dayOfWeek = new Date(date).getDay()+1;    
    return isNaN(dayOfWeek) ? null : 
      ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][dayOfWeek];
  }
  
  const diffTime = (time1, time2) => {  
    const t1 = new Date('1970-01-01T' + time1 + 'Z').getTime();
    const t2 = new Date('1970-01-01T' + time2 + 'Z').getTime();   
    
    let diffMinutes = (t1 - t2)/(1000*60);
    let diffHours = Math.floor(diffMinutes/(60));

    diffMinutes = diffMinutes - (diffHours*60);

    return diffHours.toString().padStart(2, '0') + ':' + diffMinutes.toString().padStart(2, '0');
  }

  const dataFormated = data.map(element => {    
    return {diaDaSemana: getDayOfWeek(element['dia']), ...element, total: diffTime(element['sai1'], element['ent1'])}
  });


  const keys = Object.keys(dataFormated[0]);

  return (
    <Wrapper>
      <div>
        <table>
          <Head keys={keys} head={head} />
          <tbody>
            {dataFormated.map((record, index) => <Row record={record} position={index} />)}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default DataTable;
