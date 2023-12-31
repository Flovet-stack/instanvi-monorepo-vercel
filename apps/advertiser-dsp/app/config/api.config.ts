import { AuthApi, PeopleApi } from '@instanvi/client/dist/api';
import instanviApiConfig from '.';
import axios, { AxiosInstance } from 'axios';
// import handleHttpErrors from '../handlers/handleHttpErrors';

const API_URL = process.env.API_URL;

// Create a custom Axios instance
const axiosInstance: AxiosInstance = axios.create();

// Set up request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config before it is sent
    // For example, you can add headers or authentication tokens
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Set up response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data before it is returned
    return response.data;
  },
  (error) => {
    // Handle response error
    // handleHttpErrors(error.response);
    return Promise.reject(error);
  }
);

//  auth APi
export const AuthAPI = new AuthApi(instanviApiConfig, API_URL, axiosInstance);

//  People API
export const PeopleAPI = new PeopleApi(
  instanviApiConfig,
  API_URL,
  axiosInstance
);

// export const Campaign = new AuthAPI
