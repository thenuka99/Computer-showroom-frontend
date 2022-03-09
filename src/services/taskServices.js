import axios from "axios";
import { baseUrl } from '../constants/constants';


export const getComputers = (page) => {
    return axios.get(baseUrl + '/computers?page=' + page, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export const addComputer = (data) => {
    return axios.post(baseUrl + '/computers', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateComputer = (id,data) => {
    return axios.put(baseUrl + '/computers/', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


export const deleteComputer = (id) => {
    return axios.delete(baseUrl + '/computers/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};