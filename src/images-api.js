import axios from "axios";

const apiKey = "BQVJndHzZSkNiJz6FpW26zHsUOHK2_4OaZ4YwXUA27k";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Client-ID ${apiKey}`;
  return config;
});

export const fetchImages = async (searchQuery) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
    },
  });
  return response.data.results;
};
