import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;  
  errorMessage?: string;
  className?: string;
}
