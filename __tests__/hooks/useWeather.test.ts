import { renderHook, act } from '@testing-library/react-native';
import React from 'react';
import { store } from '../../src/store';
import { useWeather } from '../../src/hooks/useWeather';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

describe('useWeather Hook', () => {
  it('initializes with correct default state', () => {
    const { result } = renderHook(() => useWeather(), { wrapper });

    expect(result.current.weatherData).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it('handles search weather action', () => {
    const { result } = renderHook(() => useWeather(), { wrapper });

    act(() => {
      result.current.searchWeather('London');
    });

    expect(result.current.loading).toBeTruthy();
  });

  it('clears error correctly', () => {
    const { result } = renderHook(() => useWeather(), { wrapper });

    act(() => {
      result.current.clearWeatherError();
    });

    expect(result.current.error).toBeNull();
  });
});
