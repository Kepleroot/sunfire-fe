import axios from 'axios'

export const $host = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const $authHost = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
