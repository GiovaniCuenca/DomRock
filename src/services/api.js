import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/db.json',
});

export default api;
