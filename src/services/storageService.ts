import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  LAST_SEARCHED_CITY: '@weather_app_last_city',
  THEME_PREFERENCE: '@weather_app_theme',
};

class StorageService {
  async setLastSearchedCity(city: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.LAST_SEARCHED_CITY, city);
    } catch (error) {
      console.error('Error saving last searched city:', error);
    }
  }

  async getLastSearchedCity(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.LAST_SEARCHED_CITY);
    } catch (error) {
      console.error('Error loading last searched city:', error);
      return null;
    }
  }

  async setThemePreference(isDarkMode: boolean): Promise<void> {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.THEME_PREFERENCE,
        JSON.stringify(isDarkMode),
      );
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  }

  async getThemePreference(): Promise<boolean> {
    try {
      const preference = await AsyncStorage.getItem(
        STORAGE_KEYS.THEME_PREFERENCE,
      );
      return preference ? JSON.parse(preference) : false;
    } catch (error) {
      console.error('Error loading theme preference:', error);
      return false;
    }
  }
}

export const storageService = new StorageService();
