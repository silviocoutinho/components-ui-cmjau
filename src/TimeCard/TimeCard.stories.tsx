import React from 'react';

import TimeCard from './TimeCard';

const data = [
  {
    dia: '2021-05-10',
    ent1: '08:01',
    sai1: '12:10',
    ent2: '13:30',
    sai2: '17:00',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-05-11',
    ent1: '08:00',
    sai1: '12:00',
    ent2: '13:33',
    sai2: '17:30',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-05-12',
    ent1: '08:00',
    sai1: '12:00',
    ent2: '13:30',
    sai2: '17:30',
    ent3: null,
    sai3: null,
  },
  {
    dia: '2021-05-13',
    ent1: '08:05',
    sai1: '12:00',
    ent2: '13:35',
    sai2: '17:30',
    ent3: '18:00',
    sai3: '21:00',
  },
  {
    dia: '2021-05-14',
    ent1: '07:00',
    sai1: '12:00',
    ent2: '13:30',
    sai2: '17:00',
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
  diaDaSemana: 'Dia',
  total: 'Total',
  ent3: 'Entrada 3',
  sai3: 'Saída 3',
  horaExtra: 'Hora-extra',
  data: 'Data',
};

export default {
  title: 'forms/TimeCard',
  component: TimeCard,
};

export const Basic = args => (
  <TimeCard data={data} head={head} workingTime={8} {...args} />
);
Basic.args = {};
