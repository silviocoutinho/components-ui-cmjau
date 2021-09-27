import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  data: any;
  field: string;
  selectedValue?: string;
}
