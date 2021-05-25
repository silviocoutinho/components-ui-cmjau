import React from 'react';
import { Wrapper as WrapperButton } from '../Button/Button.styles';

import GridContainer from './GridContainer';
import Select from '../Select/Select';
import Button from '../Button/Button';

export default {
  title: 'layoyt/GridContainer',
  component: GridContainer,
};

export const Basic = args => <GridContainer {...args} />;
Basic.args = {
  columns: 3,
};

export const Label = () => (
  <>
    <GridContainer columns={3}>Children</GridContainer>
  </>
);

const months = [
  {
    label: 'Janeiro',
    value: 1,
  },
  {
    label: 'Fevereiro',
    value: 2,
  },
  {
    label: 'Março',
    value: 3,
  },
  {
    label: 'Abril',
    value: 4,
  },
  {
    label: 'Maio',
    value: 5,
  },
];

const years = [
  {
    label: '2019',
    value: 1,
  },
  {
    label: '2020',
    value: 2,
  },
  {
    label: '2021',
    value: 3,
  },
];

export const Form = () => (
  <>
    <GridContainer columns={3}>
      <div className="select-container">
        <Select data={months} field="month" label="Mês" />
      </div>
      <div className="select-container">
        <Select data={years} field="year" label="Mês" />
      </div>
      <div className="button-container">
        <Button label="Filtrar" btnStyle="success" type="button" />
      </div>
    </GridContainer>
  </>
);
