export const validateCityName = (city: string): boolean => {
  if (!city || typeof city !== 'string') {
    return false;
  }

  const trimmedCity = city.trim();
  if (trimmedCity.length === 0 || trimmedCity.length > 100) {
    return false;
  }

  const cityRegex = /^[a-zA-Z\s\-']+$/;
  return cityRegex.test(trimmedCity);
};

export const sanitizeCityName = (city: string): string => {
  return city.trim().replace(/\s+/g, ' ');
};
