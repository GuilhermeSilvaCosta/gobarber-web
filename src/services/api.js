import axios from 'axios';

const api = axios.create({
    baseURL: 'http://potfolio.redirectme.net',
});

export default api;
