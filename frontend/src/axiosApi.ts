import axios from 'axios';

const port = 8000;

const axiosApi = axios.create({
  baseURL: `http://localhost:${port}`,
});

export default axiosApi;