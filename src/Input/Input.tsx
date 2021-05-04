import React from 'react';
import { Props } from './Input.types';
import { Wrapper } from './Input.styles';

const Input = ({ icon: Icon, label, errorMessage, ...rest }: Props) => (
  <Wrapper hideLabel={label == null}>
    {label && <label>{label}:</label>}
    {Icon && <Icon size={20} />}
    <input {...rest} />
    {errorMessage && (
      <div className="alert">
        <span>{errorMessage}</span>
      </div>
    )}
  </Wrapper>
);

export default Input;
