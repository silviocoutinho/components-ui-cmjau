import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  field: string;
  startYear: number;
  endYear: number;
  errorMessage?: string;
}
