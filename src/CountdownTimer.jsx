// CountdownTimer.js

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return difference > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <div className="flex flex-col items-center justify-center rounded-2xl shadow-2xl p-8 mt-[-20px]">
        <h1 className="text-2xl font-bold mb-6">NEW YEAR 2026 STARTS</h1>
        <div className="flex space-x-4 text-center text-xl">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-500">{timeLeft.days}</div>
            <span className="text-gray-600">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-500">{timeLeft.hours}</div>
            <span className="text-gray-600">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-500">{timeLeft.minutes}</div>
            <span className="text-gray-600">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-500">{timeLeft.seconds}</div>
            <span className="text-gray-600">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
