import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

const Clock = () => {
  const [time, setTime] = useState(' ');

  const tick = () => {
    const currentTime = new Date();

    const hours = (currentTime.getHours() + 24) % 24 || 12;

    const addZero = (t) => {
      if (t < 10) {
        t = `0${t}`;
      }
      return t;
    };

    const formatTime = `${hours}:${addZero(currentTime.getMinutes())}:${addZero(
      currentTime.getSeconds()
    )}`;
    setTime(formatTime);
  };

  setInterval(tick, 1000);

  return (

    <Typography align="center" color="textPrimary" variant="h2">
      FTROX BUSINESS -
      {' '}
      {time}
    </Typography>

  );
};

export default Clock;
