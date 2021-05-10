import React, { ComponentProps } from 'react';
import { FiMail } from 'react-icons/fi';

import Button from './Button';

export default {
  title: 'forms/Button',
  component: Button,
};

export const Basic = args => <Button {...args} />;
Basic.args = {
  type: 'primary',
  label: 'Primary',  
};

export const Type = () => (
  <>
    <Button  type="primary" label="Primary"/>
    <Button  type="success" label="Success"/>
    <Button  type="danger" label="Danger"/>
    <Button  type="warning" label="Warning"/>
    <Button  type="info" label="Info"/>
    <Button  type="dark" label="Dark"/>
  </>
);

