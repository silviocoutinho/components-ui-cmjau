import React from 'react';
import { Wrapper } from './styles';

interface Props {
  fieldName: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  errorMessage?: string;
}

const Input = ({
  fieldName,
  label,
  placeholder,
  defaultValue,
  errorMessage,
}: Props) => {
  return (
    <Wrapper>
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
