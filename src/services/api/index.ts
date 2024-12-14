import axios from 'axios';

export const dogApi = axios.create({
  baseURL: 'https://dog.ceo/api',
});
