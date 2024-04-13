import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T>{
    count: number;
    results: T[];
};

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7e1370e85f4a424aa097adcd69971c68'
    }
});

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;