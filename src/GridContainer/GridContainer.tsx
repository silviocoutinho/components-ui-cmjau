import React, { useRef, forwardRef, ReactNode } from 'react';
import { GridProps } from './GridContainer.types';
import { Wrapper } from './GridContainer.styles';

export type Ref = HTMLDivElement;

const GridContainer = forwardRef<Ref, GridProps>((props, ref) => (
  <Wrapper columns={props.columns}>{props.children}</Wrapper>
));

export default GridContainer;
