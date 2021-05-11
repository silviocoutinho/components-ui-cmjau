import React, { useState, useRef, useCallback } from 'react';
import { Props } from './Button.types';
import { Wrapper } from './Button.styles';

const Button = ({ label, btnStyle, ...rest }: Props) => {
  const componentRef = useRef<HTMLButtonElement>(null);

  return (
    <Wrapper>
      <button className={btnStyle} {...rest} ref={componentRef}>
        {label}
      </button>
    </Wrapper>
  );
};

export default Button;
