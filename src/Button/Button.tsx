import React, { useState, useRef, useCallback } from 'react';
import { Props } from './Button.types';
import { Wrapper } from './Button.styles';

const Button = ({ label, btnStyle, onClick, ...rest }: Props) => {
  const componentRef = useRef<HTMLButtonElement>(null);

  return (
    <Wrapper>
      <button
        className={btnStyle}
        onClick={onClick}
        {...rest}
        ref={componentRef}
      >
        {label}
      </button>
    </Wrapper>
  );
};

export default Button;
