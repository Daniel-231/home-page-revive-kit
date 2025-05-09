
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Format time as HH:MM:SS AM/PM
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      // Format date as Weekday, Month Day, Year
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      
      setTime(timeString);
      setDate(dateString);
    };
    
    // Update time immediately and set interval
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-6xl font-light tracking-tighter text-white mb-2">
        {time}
      </h1>
      <p className="text-xl text-white/80">
        {date}
      </p>
    </div>
  );
};

export default Clock;
