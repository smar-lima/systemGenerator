import { AxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: AxiosRequestConfig) => {
    
	// Possibilidade de tratar aqui os dados que chegam no response
    
	/*const TOKEN_KEY = '@projeto-token'
    const token = localStorage.getItem(TOKEN_KEY)
    config.headers.Authorization = token*/

	return config;
};