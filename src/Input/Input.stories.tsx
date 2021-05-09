import React, { ComponentProps } from 'react';
import { FiMail } from 'react-icons/fi';

import Input from './Input';

export default {
  title: 'forms/Input',
  component: Input,
};

export const Basic = args => <Input {...args} />;
Basic.args = {
  field: 'example1',
  label: 'Example',
  placeholder: 'Type here',
};

export const Icon = () => (
  <>
    <Input
      field="exampleIcon"
      label="Example with Icon"
      placeholder="Type a text"
      icon={FiMail}
    />
  </>
);

export const All = () => (
  <>
    <Input
      field="example2"
      label="Example with Default Value"
      placeholder="Type a text"
      defaultValue="Default Value"
    />
    <Input
      field="example3"
      label="Example with Error Message"
      placeholder="Type a text"
      errorMessage="Please, type a number"
    />
    <Input field="example4" placeholder="No label" />
  </>
);
