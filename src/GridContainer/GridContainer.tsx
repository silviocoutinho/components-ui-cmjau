import React, { useRef, forwardRef, ReactNode } from 'react';
import { Props } from './GridContainer.types';
import { Wrapper } from './GridContainer.styles';

export type Ref = HTMLDivElement;

const GridContainer = forwardRef<Ref, Props>(props, ref) => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper columns={columns}>
      <div ref={ref}>
        {Props.children}
      </div>
    </Wrapper>
  );
};

export default GridContainer;
