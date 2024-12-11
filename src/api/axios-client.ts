import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://json-server-blog.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.response.use(
  (response) => response.data ?? response,
  (error) => Promise.reject(error)
)

export { axiosClient }
