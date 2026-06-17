import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:5014/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((req) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      var refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.post("/auth/refreshToken", refreshToken);

      localStorage.setItem("jwtToken", response.data.jwtToken);

      error.config.headers.authorization = ` Bearer ${response.data.jwtToken}`;

      return axios(error.config);
    }
    return Promise.reject(error);
  },
);

export default baseApi;
