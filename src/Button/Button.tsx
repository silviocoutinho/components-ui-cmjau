import React, { useState, useRef, useCallback } from 'react';
import { Props } from './Button.types';
import { Wrapper } from './Button.styles';

const Button = ({ label, type, icon: Icon,...rest }: Props) => {
  const componentRef = useRef<HTMLInputElement>(null);
 
  return (
    <Wrapper>          
        <button className={type}
          {...rest}         
          ref={componentRef}
        >
          {label}
       </button>     
    </Wrapper>
  );
};

export default Button;
