import axios from 'axios';

// key  f45c79be0512961de9d59da38628c48488f7b539

export const key = 'f45c79be0512961de9d59da38628c48488f7b539';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
})

export default api;