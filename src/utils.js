export const getBackgroundColor = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
      case 'clear':
        return '#ADD8E6'; // Light blue for clear weather
      case 'clouds':
        return '#A9A9A9'; // Grey for cloudy weather
      case 'rain':
        return '#00008B'; // Dark blue for rainy weather
      default:
        return '#D3D3D3'; // Light grey for default
    }
  };
  