import axios from 'axios';

export class RandomCatService {
  async getRandomCat() {
    const response = await axios.get('https://aws.random.cat/meow');
    return response.data;
  }
}

export const randomCatService = new RandomCatService();
