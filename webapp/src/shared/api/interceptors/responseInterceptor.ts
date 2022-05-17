import { AxiosResponse } from 'axios';

export const responseInterceptor = (response: AxiosResponse) => {
    
	// Possibilidade de tratar aqui os dados que chegam no response

	return response;
};