import React, { useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { useTheme } from '../../../hooks/useTheme';
import { createStyles } from './SearchForm.styles';

interface SearchFormProps {
  onSearch: (city: string) => void;
  loading?: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  loading = false,
}) => {
  const [city, setCity] = useState('');
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    handleSearch();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Search for a city</Text>
      <Input
        value={city}
        onChangeText={setCity}
        placeholder="Enter city name..."
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
        autoCapitalize="words"
        autoCorrect={false}
        testID="city-input"
      />
      <Button
        title="Get Weather"
        onPress={handleSearch}
        loading={loading}
        disabled={!city.trim() || loading}
        testID="search-button"
      />
    </View>
  );
};
