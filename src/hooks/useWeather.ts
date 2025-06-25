import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState, AppDispatch } from '../store';
import {
  fetchWeather,
  clearError,
  clearWeatherData,
  loadLastSearchedCity,
} from '../store/slices/weatherSlice';

export const useWeather = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, lastSearchedCity } = useSelector(
    (state: RootState) => state.weather,
  );

  const searchWeather = useCallback(
    (city: string) => {
      dispatch(fetchWeather(city));
    },
    [dispatch],
  );

  const clearWeatherError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  const clearWeather = useCallback(() => {
    dispatch(clearWeatherData());
  }, [dispatch]);

  const loadLastCity = useCallback(() => {
    dispatch(loadLastSearchedCity());
  }, [dispatch]);

  return {
    weatherData: data,
    loading,
    error,
    lastSearchedCity,
    searchWeather,
    clearWeatherError,
    clearWeather,
    loadLastCity,
  };
};
