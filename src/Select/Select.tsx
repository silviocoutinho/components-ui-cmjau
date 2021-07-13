import React, { useRef } from 'react';
import { Props } from './Select.types';
import { Wrapper } from './Selecy.styles';

const Select = ({ label, data, field, onChange, ...rest }: Props) => {
  const componentRef = useRef<HTMLSelectElement>(null);

  return (
    <Wrapper>
      <div className="grid-container">
        <div className="select-container">
          <label>{label}</label>
          <select id="selectMonths" ref={componentRef} onChange={onChange}>
            {data.map((element, key) => {
              return (
                <option key={key} value={element.value}>
                  {element.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

export default Select;
