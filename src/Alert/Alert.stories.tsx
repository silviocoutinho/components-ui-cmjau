import React from 'react';

import Alert from './Alert';

export default {
  title: 'forms/Alert',
  component: Alert,
};

export const Basic = args => <Alert {...args} />;
Basic.args = {
  message: 'A simple primary alert—check it out!',
  type: 'primary',
};

export const Type = () => (
  <>
    <Alert message="A simple primary alert—check it out!" type="primary" />
    <Alert message="A simple success alert—check it out!" type="success" />
    <Alert message="A simple danger alert—check it out!" type="danger" />
    <Alert message="A simple warning alert—check it out!" type="warning" />
  </>
);

export const Align = () => (
  <>
    <Alert message="Text algined to right" type="primary" textAlign="right" />
    <Alert message="Text algined to center" type="primary" textAlign="center" />
    <Alert message="Text algined to left" type="primary" />
  </>
);
