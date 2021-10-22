import React, { useState, useRef, useCallback } from 'react';
import { Props } from './Radio.types';
import { Wrapper } from './Radio.styles';

const Radio = ({ id, label, errorMessage, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, [inputRef]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [inputRef]);

  return (
    <Wrapper
      hideLabel={label == null}     
      isFocusedOrFilled={isFocused || isFilled}
    >
      

      <div className="input-container">        
        <input
          {...rest}
          id={id}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          type="radio"
        />
        {label && <label htmlFor={id}>{label}</label>}
        {errorMessage && (
          <div>
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Radio;
