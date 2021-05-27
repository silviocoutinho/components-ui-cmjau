import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Props } from './MonthYear.types';
import { Wrapper } from './MonthYear.styles';
import { Wrapper as WrapperButton } from '../Button/Button.styles';

const MonthYear = ({ startYear, endYear, errorMessage, ...rest }: Props) => {
  const monthRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [fieldMonth, setFieldMonth] = useState('Janeiro');
  const [fieldYear, setFieldYear] = useState(endYear);
  const [controlMonth, setControlMonth] = useState(new Date().getMonth());

  const months = new Array(
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  );

  const handleYear = evt => {
    setFieldYear(evt.target.value);
    setFieldMonth('Janeiro');
    if (evt.target.value == endYear) {
      setControlMonth(new Date().getMonth());
    } else {
      setControlMonth(12);
    }
  };

  const handleMonth = evt => {
    setFieldMonth(evt.target.value);
  };

  let years = [];

  while (startYear < endYear + 1) {
    years.push(startYear++);
  }

  return (
    <Wrapper>
      <div className="grid-container">
        <div className="select-container">
          <label>Mês</label>
          <select
            id="selectMonths"
            ref={monthRef}
            onChange={handleMonth}
            value={fieldMonth}
          >
            {months.map((element, key) => {
              if (key <= controlMonth) {
                return <option key={key}>{element}</option>;
              } else {
                return (
                  <option key={key} disabled>
                    {element}
                  </option>
                );
              }
            })}
          </select>
        </div>
        <div className="select-container">
          <label>Ano</label>
          <select
            id="selectYears"
            ref={yearRef}
            onChange={handleYear}
            value={fieldYear}
          >
            {years.map((element, key) => {
              return <option key={key}>{element}</option>;
            })}
          </select>
        </div>

        <WrapperButton>
          <button className="primary" type="submit" ref={buttonRef}>
            Filtrar
          </button>
        </WrapperButton>

        {errorMessage && (
          <div>
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default MonthYear;
