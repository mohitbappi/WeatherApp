import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData, WeatherState } from '../../types/weather';
import { weatherApi } from '../../services/weatherApi';
import { storageService } from '../../services/storageService';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  lastSearchedCity: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const data = await weatherApi.getCurrentWeather(city);
      await storageService.setLastSearchedCity(city);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch weather data');
    }
  },
);

export const loadLastSearchedCity = createAsyncThunk(
  'weather/loadLastSearchedCity',
  async () => {
    const city = await storageService.getLastSearchedCity();
    return city;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    clearWeatherData: state => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<WeatherData>) => {
          state.loading = false;
          state.data = action.payload;
          state.lastSearchedCity = action.payload.name;
          state.error = null;
        },
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loadLastSearchedCity.fulfilled, (state, action) => {
        state.lastSearchedCity = action.payload;
      });
  },
});

export const { clearError, clearWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
