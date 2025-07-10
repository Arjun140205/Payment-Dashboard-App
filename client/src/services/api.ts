import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Use local IP if running on mobile
});

export default API;