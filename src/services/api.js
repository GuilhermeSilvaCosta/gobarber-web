import axios from 'axios';

const api = axios.create({
    baseURL: 'https://potfolio.redirectme.net',
});

export default api;
