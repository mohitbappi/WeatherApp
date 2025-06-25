import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWeather } from '../../hooks/useWeather';
import { useTheme } from '../../hooks/useTheme';
import { SearchForm } from '../../components/weather/SearchForm';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { DarkModeToggle } from '../../components/weather/DarkModeToggle';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { createStyles } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { theme, loadTheme } = useTheme();
  const {
    weatherData,
    loading,
    error,
    lastSearchedCity,
    searchWeather,
    clearWeatherError,
    loadLastCity,
  } = useWeather();

  const styles = createStyles(theme);

  useEffect(() => {
    loadTheme();
    loadLastCity();
  }, [loadTheme, loadLastCity]);

  useEffect(() => {
    if (lastSearchedCity && !weatherData) {
      searchWeather(lastSearchedCity);
    }
  }, [lastSearchedCity, weatherData, searchWeather]);

  const handleSearch = (city: string) => {
    if (city.trim()) {
      searchWeather(city.trim());
    }
  };

  const handleErrorDismiss = () => {
    clearWeatherError();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.title}>Weather App</Text>
            <DarkModeToggle />
          </View>

          <View style={styles.content}>
            <SearchForm onSearch={handleSearch} loading={loading} />

            {loading && (
              <View style={styles.loadingContainer}>
                <LoadingSpinner />
                <Text style={styles.loadingText}>Fetching weather data...</Text>
              </View>
            )}

            {error && (
              <ErrorMessage message={error} onDismiss={handleErrorDismiss} />
            )}

            {weatherData && !loading && (
              <View style={styles.weatherContainer}>
                <WeatherCard weatherData={weatherData} />
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
