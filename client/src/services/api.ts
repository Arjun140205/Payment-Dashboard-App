import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081', // replace with your IP if on mobile
});

export default API;