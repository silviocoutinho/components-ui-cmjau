import React from 'react';

import Select from './Select';

const data = [
  {
    label: 'Janeiro',
    value: 1,
  },
  {
    label: 'Fevereiro',
    value: 2,
  },
  {
    label: 'Março',
    value: 3,
  },
  {
    label: 'Abril',
    value: 4,
  },
  {
    label: 'Maio',
    value: 5,
  },
];

export default {
  title: 'forms/Select',
  component: Select,
};

export const Basic = args => <Select {...args} />;
Basic.args = {
  field: 'example1',
  label: 'Month',
  data: data,
};
