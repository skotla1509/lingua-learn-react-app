import axios from 'axios';
const BASE_API = `http://localhost:5000`;
const USERS_API = `${BASE_API}/api/users`;

export const test = async () => {
  const response = await axios.get(`${USERS_API}/test`)
  return response.data
}

export const findUserById = async (uid) => {
  const response = await axios.get(`${USERS_API}/${uid}`)
  return response.data
}

export const register = async (user) => {
  const response = await axios.post(`${BASE_API}/register`, user)
  return response.data;
}

export const changePassword = async (user) => {
  const response = await axios.post(`${BASE_API}/changepassword`, user)
  return response.data;
}

export const deleteUser = async (user) => {
  const response = await axios.delete(`${USERS_API}/${user}`);
  return response.data
}

export const login = async (user) => {
  const response = await axios.post(`${BASE_API}/login`, user)
  return response.data
}

export const logout = async () => {
  const response = await axios.post(`${BASE_API}/logout`)
  return response.data
}