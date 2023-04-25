import axios from "axios";

const token = localStorage.getItem("@MotorsToken");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});

export const apiKars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 10000,
});
