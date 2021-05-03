import React, { ComponentProps } from 'react';

import Input from './Input';

export default {
  title: 'forms/Input',
  component: Input,
};

export const Basic = args => <Input {...args} />;
Basic.args = {
  fieldName: 'example1',
  label: 'Example',
  placeholder: 'Type here',
};

export const All = () => (
  <>
    <Input
      fieldName="example2"
      label="Example with Default Value"
      placeholder="Type a text"
      defaultValue="Default Value"
    />
    <Input
      fieldName="example3"
      label="Example with Error Message"
      placeholder="Type a text"
      errorMessage="Please, type a number"
    />
    <Input fieldName="example4" placeholder="No label" />
  </>
);
