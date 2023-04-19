import axios from 'axios';

const token = localStorage.getItem('@MotorsToken')

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}

export const instance = axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 5000,
    headers
})