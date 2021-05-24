import React from 'react';

import GridContainer from './GridContainer';

export default {
  title: 'forms/Alert',
  component: GridContainer,
};

export const Basic = args => <GridContainer {...args} />;
Basic.args = {
  message: 'A simple primary alert—check it out!',
  type: 'primary',
};

export const Type = () => (
  <>
    <GridContainer message="A simple primary alert—check it out!" type="primary" />
    <GridContainer message="A simple success alert—check it out!" type="success" />
    <GridContainer message="A simple danger alert—check it out!" type="danger" />
    <GridContainer message="A simple warning alert—check it out!" type="warning" />
  </>
);


