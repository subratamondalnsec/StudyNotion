import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/v1", // ✅ your backend
    withCredentials: true, // ✅ VERY IMPORTANT for cookie-based auth
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
