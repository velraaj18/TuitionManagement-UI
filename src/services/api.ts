import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:5014/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((req) => {
    const token = localStorage.getItem("jwtToken");
    if(token){
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
})

export default baseApi
