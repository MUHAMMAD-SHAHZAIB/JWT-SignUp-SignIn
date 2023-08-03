import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

//----------Sign Up Api -----------------------------
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/signup`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export const signup = async (userData) => {
  try {
    const response = await api.post("/signup", userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

//----------Sign In Api -----------------------------
export const signin = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, userData);
    console.log(userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
