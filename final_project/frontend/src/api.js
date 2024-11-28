import axios from "axios";

const apiURL = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL? import.meta.env.VITE_API_URL : apiURL,
});

export default api;