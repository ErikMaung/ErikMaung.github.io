import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // Format: "2025-12-31T23:59:59"
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <h1 style={{fontSize: '10vw', fontWeight: '520'}}>
      {timeLeft.days > 9 ? '' : '0'}{timeLeft.days}:
      {timeLeft.hours > 9 ? '' : '0'}{timeLeft.hours}:
      {timeLeft.minutes > 9 ? '' : '0'}{timeLeft.minutes}:
      {timeLeft.seconds > 9 ? '' : '0'}{timeLeft.seconds}
    </h1>
  );
};

export default Countdown;