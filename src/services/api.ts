import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:5014/api",
  headers: {
    "Content-Type": "application/json",
  },
});

baseApi.interceptors.request.use((req) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

baseApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        var refreshToken = localStorage.getItem("refreshToken");

        const response = await axios.post("/auth/refreshToken", refreshToken);

        localStorage.setItem("jwtToken", response.data.jwtToken);

        error.config.headers.authorization = ` Bearer ${response.data.jwtToken}`;

        return axios(originalRequest);
      } catch (error) {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("refreshToken");

        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default baseApi;
