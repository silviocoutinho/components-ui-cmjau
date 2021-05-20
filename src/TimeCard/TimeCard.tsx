import React, { useRef } from 'react';
import { Props } from './TimeCard.types';
import { Wrapper } from './TimeCard.styles';

import DataTable from '../DataTable/DataTable';

const TimeCard = ({ data, head, workingTime, ...rest }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);
  let hasOverTime: boolean;

  const getDayOfWeek = date => {
    const dayOfWeek = new Date(date).getDay() + 1;
    return isNaN(dayOfWeek)
      ? null
      : ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][
          dayOfWeek
        ];
  };

  const getNumberDay = date => {
    const numberDay = new Date(date).getDate();
    return isNaN(numberDay) ? null : numberDay;
  };

  const diffTime = (in1, out1, in2, out2, workingTime) => {
    in1 = new Date('1970-01-01T' + in1 + 'Z').getTime();
    out1 = new Date('1970-01-01T' + out1 + 'Z').getTime();
    in2 = new Date('1970-01-01T' + in2 + 'Z').getTime();
    out2 = new Date('1970-01-01T' + out2 + 'Z').getTime();

    let workedMinutes = (out1 - in1) / (1000 * 60);
    workedMinutes = workedMinutes + (out2 - in2) / (1000 * 60);

    //Calculing diff between workedTime and workingTime
    const diffMinutes = workingTime * 60 - workedMinutes;

    let workedHours = Math.floor(workedMinutes / 60);
    workedMinutes = workedMinutes - workedHours * 60;

    let colorTotalTime = 'success';

    if (diffMinutes > 0 && diffMinutes <= 5) {
      colorTotalTime = 'warning';
    }

    if (diffMinutes > 5 && diffMinutes <= 10) {
      colorTotalTime = 'advisory';
    }

    if (diffMinutes > 10) {
      colorTotalTime = 'danger';
    }

    return (
      <div className={colorTotalTime}>
        {workedHours.toString().padStart(2, '0') +
          ':' +
          workedMinutes.toString().padStart(2, '0')}
      </div>
    );
  };

  const overTime = (in3, out3) => {
    if (in3 == null || out3 == null) return '';
    in3 = new Date('1970-01-01T' + in3 + 'Z').getTime();
    out3 = new Date('1970-01-01T' + out3 + 'Z').getTime();

    let diffMinutes = (out3 - in3) / (1000 * 60);

    let diffHours = Math.floor(diffMinutes / 60);
    diffMinutes = diffMinutes - diffHours * 60;

    return (
      diffHours.toString().padStart(2, '0') +
      ':' +
      diffMinutes.toString().padStart(2, '0')
    );
  };

  hasOverTime = false;
  data.forEach(elements => {
    const { ent3, sai3 } = elements;
    if (ent3 !== null && sai3 !== null) {
      hasOverTime = true;
    }
  });

  const dataFormated = data.map(element => {
    const { ent3, sai3, dia, ...rest } = element;
    if (hasOverTime) {
      return {
        data: getNumberDay(dia),
        diaDaSemana: getDayOfWeek(dia),
        ...rest,
        total: diffTime(
          element['ent1'],
          element['sai1'],
          element['ent2'],
          element['sai2'],
          workingTime,
        ),
        ent3,
        sai3,
        horaExtra: overTime(ent3, sai3),
      };
    } else {
      return {
        data: getNumberDay(dia),
        diaDaSemana: getDayOfWeek(dia),
        ...rest,
        total: diffTime(
          element['ent1'],
          element['sai1'],
          element['ent2'],
          element['sai2'],
          workingTime,
        ),
      };
    }
  });

  const keys = Object.keys(dataFormated[0]);

  return (
    <Wrapper>
      <div>
        <DataTable data={dataFormated} head={head} />
      </div>
    </Wrapper>
  );
};

export default TimeCard;
