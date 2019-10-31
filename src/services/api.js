import axios from 'axios';

const api = axios.create({
  baseURL: 'http://my-json-server.typicode.com/GiovaniCuenca/DomRock/db',
});

export default api;
