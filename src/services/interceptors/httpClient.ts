import axios, { AxiosInstance } from 'axios';

import { RAPID_API_KEY, RAPID_API_URL } from '@/constants/configs';

import { requestErrorInterceptor, requestInterceptor } from './Request';
import { responseErrorInterceptor, responseInterceptor } from './Response';

const httpClient: AxiosInstance = axios.create({
    baseURL: RAPID_API_URL,
    headers: {
        'x-rapidapi-key': RAPID_API_KEY,
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
    },
});

httpClient.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
httpClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default httpClient;
