
import React from 'react';

const WeatherDisplay: React.FC = () => {
  // In a real implementation, you would fetch this data from a weather API
  // For now, we'll use placeholder data
  const temperature = '21°C';
  const condition = 'Rainy';
  
  return (
    <div className="text-center mb-6">
      <p className="text-xl text-white/90">
        {temperature} {condition}
      </p>
    </div>
  );
};

export default WeatherDisplay;
