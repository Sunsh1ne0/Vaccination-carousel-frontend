import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

export const DateComponent = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = dayjs().format('DD.MM');
    setDate(today);
  }, []);

  return <>{date}</>;
};