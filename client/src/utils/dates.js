import React from 'react';
import { formatDistance, parseISO, getHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const time = getHours(new Date());

export const formatTime = (value) => {
  return (
    <>
      há
      {' '}
      {formatDistance(parseISO(value, 0), new Date(), {
        locale: ptBR
      })}
    </>
  );
};

export const visitorTime = () => {
  if (time < 13) {
    return <> Hi, Good Morning visitor 🌅 </>;
  }
  if (time < 18) {
    return <> Hi, Good afternoon visitor ☀️</>;
  }
  return <> Hi, Good night visitor 🌙</>;
};
