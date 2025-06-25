import React from 'react';
import { View, Text, Image } from 'react-native';
import { WeatherData } from '../../../types/weather';
import { weatherApi } from '../../../services/weatherApi';
import { useTheme } from '../../../hooks/useTheme';
import { createStyles } from './WeatherCard.styles';

interface WeatherCardProps {
  weatherData: WeatherData;
  testID?: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherData,
  testID,
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { name, sys, main, weather, wind } = weatherData;
  const currentWeather = weather[0];

  const formatTemperature = (temp: number): string => {
    return `${Math.round(temp)}°C`;
  };

  const capitalizeFirst = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.header}>
        <Text style={styles.cityName}>
          {name}, {sys.country}
        </Text>
        <Text style={styles.temperature}>{formatTemperature(main.temp)}</Text>
      </View>

      <View style={styles.weatherInfo}>
        <Image
          source={{ uri: weatherApi.getWeatherIconUrl(currentWeather.icon) }}
          style={styles.weatherIcon}
          resizeMode="contain"
        />
        <Text style={styles.weatherDescription}>
          {capitalizeFirst(currentWeather.description)}
        </Text>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Feels like</Text>
          <Text style={styles.detailValue}>
            {formatTemperature(main.feels_like)}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{main.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Wind</Text>
          <Text style={styles.detailValue}>{wind.speed} m/s</Text>
        </View>
      </View>
    </View>
  );
};
