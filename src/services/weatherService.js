import axios from 'axios';

export class WeatherService {
  async getWeather(lat, lon) {
    const response = await axios.get(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`);
    return response.data;
  }
}

export const weatherService = new WeatherService();
