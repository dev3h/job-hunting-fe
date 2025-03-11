import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.PUBLIC_API_URL,
    timeout: 100000,
    withCredentials: true,
    responseType: 'json',
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    const location = window.location.pathname;
    const token = location.startsWith('/employee') ? localStorage.getItem('emp_token') : localStorage.getItem('jse_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosInstance