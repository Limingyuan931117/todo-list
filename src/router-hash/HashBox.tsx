import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const Container = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #dedede;
  display: flex;
  justify-content: space-around;
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  & a {
    width: 33%;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 200px;
  background: blue;
`;

const Tr = styled.div``;
const Td = styled.div``;
const Thead = styled.div`
  display: flex;
  justify-content: space-around;
`;

function getWeekDays() {
  const date = dayjs(new Date());
  const weekIndex = date.day();
  const weekDays = [];
  if (weekIndex === 0) {
    // 如果当前天是周日 是一周的第一天 则获取前6天和当前天
    for (let i = 6; i >= 0; i--) {
      const tempDay = date.subtract(i, 'day');
      weekDays.push(tempDay);
    }
  } else {
    for (let i = weekIndex - 1; i >= 1; i--) {
      // 前几天
      const tempDay = date.subtract(i, 'day');
      weekDays.push(tempDay);
    }
    for (let i = 0; i <= 7 - weekIndex; i++) {
      // 后几天(包含当前天)
      const tempDay = date.add(i, 'day');
      weekDays.push(tempDay);
    }
  }
  // this.weekDays = weekDays;
  return weekDays;
}

export default function Hashbox() {
  const weeks = getWeekDays().map((week, index) => ({
    ...week,
    title: `领导人${index}`,
  }));

  // console.log(weeks);
  let arr: any = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }

  return (
    <table>
      <Thead>
        {weeks.map((week) => (
          <Tr>{week.title}</Tr>
        ))}
      </Thead>
      <Thead>
        {weeks.map((week) => (
          <Tr>
            {arr &&
              arr.map((item: string) => (
                <Td>{Number(item) % 2 !== 0 ? item : ''}</Td>
              ))}
          </Tr>
        ))}
      </Thead>
    </table>
  );
}
