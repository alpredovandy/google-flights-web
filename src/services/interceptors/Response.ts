import { AxiosError, AxiosResponse } from 'axios';

const responseInterceptor = <T = any>(response: AxiosResponse<T>): AxiosResponse<T> => {
    return response;
};

const responseErrorInterceptor = (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
};

export { responseInterceptor, responseErrorInterceptor };
