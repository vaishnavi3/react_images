import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 350f56965ad92c1e1b7dd7ffef86d0dfc68a1509e4911b0080998ed2742e70ac'
  }
});
