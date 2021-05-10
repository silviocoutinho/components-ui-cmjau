import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  field: string;
  label?: string;
  placeholder: string;
  defaultValue?: string;
  icon?: React.ComponentType<IconBaseProps>;
  errorMessage?: string;
}
