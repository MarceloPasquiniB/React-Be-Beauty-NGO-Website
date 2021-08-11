import axios from 'axios';

export const api = axios.create({
    baseURL: "https://makeup-api.herokuapp.com/api/v1/products.json"
});


