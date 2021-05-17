import React, { useState, useRef, useCallback } from 'react';
import { Props } from './DataTable.types';
import { Wrapper } from './DataTable.styles';

const DataTable = ({ message, type, textAlign, ...rest }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const data = {};

  return (
    <Wrapper align={textAlign ? textAlign : null}>
      <div className={type} {...rest}>
        {message}
      </div>
    </Wrapper>
  );
};

export default DataTable;
