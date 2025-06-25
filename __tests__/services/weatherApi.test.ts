import { weatherApi } from '../../src/services/weatherApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WeatherApi Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches weather data successfully', async () => {
    const mockWeatherData = {
      name: 'London',
      main: { temp: 20 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    };

    mockedAxios.create.mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: mockWeatherData }),
      interceptors: {
        request: { use: jest.fn() },
        response: { use: jest.fn() },
      },
    } as any);

    const result = await weatherApi.getCurrentWeather('London');
    expect(result).toEqual(mockWeatherData);
  });

  it('handles API errors correctly', async () => {
    const errorMessage = 'City not found';

    mockedAxios.create.mockReturnValue({
      get: jest.fn().mockRejectedValue({
        response: { data: { message: errorMessage }, status: 404 },
      }),
      interceptors: {
        request: { use: jest.fn() },
        response: { use: jest.fn() },
      },
    } as any);

    await expect(weatherApi.getCurrentWeather('InvalidCity')).rejects.toThrow();
  });

  it('generates correct weather icon URL', () => {
    const iconCode = '01d';
    const expectedUrl = 'https://openweathermap.org/img/wn/01d@2x.png';

    expect(weatherApi.getWeatherIconUrl(iconCode)).toBe(expectedUrl);
  });
});
