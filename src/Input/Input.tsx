import React from 'react';
import { Props } from './Input.types';
import { Wrapper } from './Input.styles';

const Input = ({
  fieldName,
  label,
  placeholder,
  defaultValue,
  errorMessage,
}: Props) => {
  return (
    <Wrapper hideLabel={label == null}>
      {label && <label>{label}</label>}
      <input
        id={fieldName}
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errorMessage && (
        <div className="alert">
          <span>{errorMessage}</span>
        </div>
      )}
    </Wrapper>
  );
};

export default Input;
