import React from 'react';

import TimeCard from './TimeCard';

const data = [
  {
    dia: '2021-07-05',
    ent1: '08:01',
    sai1: '12:10',
    ent2: '13:30',
    sai2: '17:00',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-07-06',
    ent1: '08:00',
    sai1: '12:00',
    ent2: '13:33',
    sai2: '17:30',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-07-07',
    ent1: '08:00',
    sai1: '12:00',
    ent2: '13:30',
    sai2: '17:30',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-07-08',
    ent1: '08:05',
    sai1: '12:00',
    ent2: '13:35',
    sai2: '17:30',
    ent3: '18:00',
    sai3: '21:00',
  },
  {
    dia: '2021-07-09',
    ent1: '07:00',
    sai1: '12:00',
    ent2: '13:30',
    sai2: '17:00',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-07-10',
    ent1: '07:00',
    sai1: '12:00',
    ent2: null,
    sai2: null,
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-05-12',
    ent1: '07:00',
    sai1: null,
    ent2: null,
    sai2: null,
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-05-13',
    ent1: '07:00',
    sai1: '10:00',
    ent2: '11:00',
    sai2: '13:00',
    ent3: '17:00',
    sai3: null,
  },
  {
    dia: '2021-12-14',
    ent1: '07:39',
    sai1: '12:47',
    ent2: '16:30',
    sai2: null,
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-12-15',
    ent1: '07:39',
    sai1: '12:47',
    ent2: '16:41',
    sai2: null,
    ent3: null,
    sai3: null,
  },
];

const head = {
  ent1: 'Entrada 1',
  sai1: 'Saída 1',
  ent2: 'Entrada 2',
  sai2: 'Saída 2',
  dia: 'Data',
  diaDaSemana: 'Dia da Semana',
  total: 'Trabalhadas',
  faltam: 'Faltam',
  ent3: 'Entrada 3',
  sai3: 'Saída 3',
  horaExtra: 'Hora-extra',
  data: 'Dia',
};

export default {
  title: 'forms/TimeCard',
  component: TimeCard,
};

export const Basic = args => (
  <TimeCard data={data} head={head} workingTime={8} {...args} />
);

Basic.args = {};


const dataWithoutOverTime = [
  {
    dia: '2021-12-05',
    ent1: '08:01',
    sai1: '12:10',
    ent2: '13:30',
    sai2: '17:00',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-12-06',
    ent1: '08:01',
    sai1: '12:10',
    ent2: '13:30',
    sai2: '15:00',
    ent3: null,
    sai3: null,
  },
  
  


];

export const WithoutOverTime = () => (
  <>
    <TimeCard data={dataWithoutOverTime} head={head} workingTime={8}  />
  </>
);


