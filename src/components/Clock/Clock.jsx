import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

let Clock = () => {
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = dayjs();
      const timeNow = now.format('H:mm');
      setTime(timeNow);
    };
    let TimeId = setInterval(updateTime, 1000);
    return () => clearInterval(TimeId);
  }, []);

  return <>{time}</>;
};

export default Clock;