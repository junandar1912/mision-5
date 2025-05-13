import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ initialMinutes = 50, initialSeconds = 55 }) => {
  const [timeLeft, setTimeLeft] = useState(
    initialMinutes * 60 + initialSeconds
  );

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (value) => value.toString().padStart(2, '0');

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer-container">
      <span className="timer-text">Selesaikan pemesanan dalam</span>
      <div className="time-box">{formatTime(hours)}</div>
      <span className="separator">:</span>
      <div className="time-box">{formatTime(minutes)}</div>
      <span className="separator">:</span>
      <div className="time-box">{formatTime(seconds)}</div>
    </div>
  );
};

export default Timer;
