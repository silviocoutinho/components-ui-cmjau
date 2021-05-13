import React from 'react';

import MonthYear from './MonthYear';

export default {
  title: 'forms/MonthYear',
  component: MonthYear,
};

export const Basic = args => <MonthYear {...args} />;
Basic.args = {
  field: 'example1',
  startYear: 2018,
  endYear: 2021,
};

export const Icon = () => (
  <>
    <MonthYear field="exampleIcon" startYear={2020} endYear={2020} />
  </>
);
