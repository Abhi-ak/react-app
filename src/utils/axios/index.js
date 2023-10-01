import axios from "axios";

import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from "./interceptors";

const baseURL = process.env.REACT_APP_BACKEND_URL;
const api = axios.create({ baseURL: baseURL });

api.interceptors.request.use(onRequest, onRequestError);

api.interceptors.response.use(onResponse, onResponseError);

export const LIST_API = '/all?fields=name,region,flag'

export default api;
