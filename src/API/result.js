import axios from 'axios';
import {setAuthHeader} from './api';

export const post = async (url, params) => {
    setAuthHeader();
    const results = await axios.post(url, params);
    return results.data;
}

export const get = async(url,params) =>{
    setAuthHeader();
    const results = await axios.get(url, params);
    return results.data;
};

