import axios from 'axios';
import { Environment } from '../environment';

import { responseInterceptor, errorInterceptor, requestInterceptor } from './interceptors';

const Api = axios.create({
	baseURL: Environment.URL_BASE,
});

Api.interceptors.request.use(
	(config) => requestInterceptor(config),
	(error) => errorInterceptor(error)
);

Api.interceptors.response.use(
	(response) => responseInterceptor(response),
	(error) => errorInterceptor(error)
);

export default Api;
