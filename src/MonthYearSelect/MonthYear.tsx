import React, { useState, useRef, useCallback } from 'react';
import { Props } from './MonthYear.types';
import { Wrapper } from './MonthYear.styles';
import Button from '../Button/Button';

const MonthYear = ({ startYear, endYear, errorMessage, ...rest }: Props) => {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const months = new Array(
    'Janeiro',
    'Fevereiro',
    'Marco',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Septembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  );
  const currentMonth = new Date().getMonth();

  let years = [];

  while (startYear < endYear + 1) {
    years.push(startYear++);
  }

  return (
    <Wrapper>
      <div className="grid-container">
        <div className="select-container">
          <label>Mês</label>
          <select id="selectMonths">
            {months.map((element, key) => {
              if (key <= currentMonth) {
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
          <select id="selectYears">
            {years.map((element, key) => {
              if (key <= currentMonth) {
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
        <div className="button-container">
          <Button type="button" btnStyle="primary" label="Filtrar" />
        </div>

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
