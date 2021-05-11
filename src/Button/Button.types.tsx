import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  btnStyle: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';
  type: 'submit' | 'button' | 'reset';
}
