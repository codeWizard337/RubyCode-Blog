import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rubbyyy.herokuapp.com',
});

export default instance;
