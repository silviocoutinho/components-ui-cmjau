import React, { ComponentProps } from 'react';
import { FiMail } from 'react-icons/fi';

import Button from './Button';

export default {
  title: 'forms/Button',
  component: Button,
};

export const Basic = args => <Button {...args} />;
Basic.args = {
  btnStyle: 'primary',
  label: 'Primary',
};

export const Type = () => (
  <>
    <Button
      btnStyle="primary"
      label="Primary"
      type="submit"
      onClick={() => console.log('Click Primary')}
    />
    <Button btnStyle="success" label="Success" type="button" />
    <Button btnStyle="danger" label="Danger" type="button" />
    <Button btnStyle="warning" label="Warning" type="button" />
    <Button btnStyle="info" label="Info" type="button" />
    <Button btnStyle="dark" label="Dark" type="button" />
  </>
);
