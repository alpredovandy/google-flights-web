import { AxiosError, InternalAxiosRequestConfig } from 'axios';

const requestInterceptor = (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
    return config;
};

const requestErrorInterceptor = (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
};

export { requestInterceptor, requestErrorInterceptor };
