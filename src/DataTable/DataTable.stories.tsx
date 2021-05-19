import React from 'react';

import DataTable from './DataTable';

const data = [
  {
    product: 'Iphone X',
    type: 'Smartphone',
    price: 9000,
    amount: 250,
  },
  {
    product: 'MacBook Air',
    type: 'Laptop',
    price: 19000,
    amount: 350,
  },
  {
    product: 'Apple Watch Series',
    type: 'Smartwatch',
    price: 4000,
    amount: 570,
  },
];

const head = {
  product: 'Product Description',
  type: 'Type',
  price: 'Price',
  amount: 'Amount',
};

export default {
  title: 'forms/DataTable',
  component: DataTable,
};

export const Basic = args => <DataTable data={data} head={head} {...args} />;
Basic.args = {};
