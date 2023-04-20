import axios from 'axios';

export const $host = axios.create({
  baseURL: 'http://localhost:5000'
})

export const $authHost = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})