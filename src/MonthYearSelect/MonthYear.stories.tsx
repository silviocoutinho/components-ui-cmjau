import React from 'react';

import MonthYear from './MonthYear';

export default {
  title: 'template/MonthYear',
  component: MonthYear,
};

export const Basic = args => <MonthYear {...args} />;
Basic.args = {
  field: 'example1',
  startYear: 2018,
  endYear: 2021,
};

const data = '';

export const Click = () => (
  <>
    <MonthYear field="exampleIcon" startYear={2015} endYear={2020} />
  </>
);
