import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_CONFIG, ENDPOINTS } from '../config/api';
import { WeatherData } from '../types/weather';
import { ApiError } from '../types/api';

class WeatherApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.api.interceptors.request.use(
      config => {
        config.params = {
          ...config.params,
          appid: API_CONFIG.API_KEY,
          units: 'metric',
        };
        return config;
      },
      error => Promise.reject(error),
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      error => {
        const apiError: ApiError = {
          message: error.response?.data?.message || error.message,
          code: error.response?.data?.cod || error.code,
          status: error.response?.status,
        };
        return Promise.reject(apiError);
      },
    );
  }

  async getCurrentWeather(city: string): Promise<WeatherData> {
    try {
      const response = await this.api.get<WeatherData>(
        ENDPOINTS.CURRENT_WEATHER,
        {
          params: { q: city },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  getWeatherIconUrl(iconCode: string): string {
    return `${ENDPOINTS.WEATHER_ICON}/${iconCode}@2x.png`;
  }
}

export const weatherApi = new WeatherApiService();
