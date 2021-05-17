import React from 'react';

import DataTable from './DataTable';

export default {
  title: 'forms/DataTable',
  component: DataTable,
};

export const Basic = args => <DataTable {...args} />;
Basic.args = {
  message: 'A simple primary alert—check it out!',
  type: 'primary',
};
