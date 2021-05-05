import React, { useState, useRef, useCallback } from 'react';
import { Props } from './Input.types';
import { Wrapper } from './Input.styles';

const Input = ({ icon: Icon, label, errorMessage, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
    console.log(isFilled, isFocused, !!inputRef.current?.value);
  }, [inputRef]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [inputRef]);

  return (
    <Wrapper
      hideLabel={label == null}
      inputIcon={Icon && true}
      isFocusedOrFilled={isFocused || isFilled}
    >
      {label && <label>{label}:</label>}

      <div className="input-container">
        {Icon && <Icon size={20} />}
        <input
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
        {errorMessage && (
          <div className="alert">
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Input;
