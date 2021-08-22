/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents: () => {
    return apiClient.get("/events");
  },
};
