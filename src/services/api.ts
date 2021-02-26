import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// https://my-json-server.typicode.com/FelipeDSR/Cart-redux
export default api;
