import axios from "axios"


const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export const $api = axios.create({
    baseURL: BASE_URL
})