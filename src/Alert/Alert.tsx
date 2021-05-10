import React, { useState, useRef, useCallback } from 'react';
import { Props } from './Alert.types';
import { Wrapper } from './Alert.styles';

const Alert = ({ message, type, textAlign, ...rest }: Props) => {
  const alertRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper align={textAlign ? textAlign : null}>
      <div className={type} {...rest}>
        {message}
      </div>
    </Wrapper>
  );
};

export default Alert;
