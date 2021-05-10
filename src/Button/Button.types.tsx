import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string; 
  type: string; 
  icon?: React.ComponentType<IconBaseProps>;
 
}
