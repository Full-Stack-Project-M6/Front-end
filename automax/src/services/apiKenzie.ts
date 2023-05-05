import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

export const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
  headers,
});

export const apiKars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 10000,
});
