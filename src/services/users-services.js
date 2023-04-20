import axios from 'axios';
const BASE_API = `http://localhost:1000`;
const USERS_API = `${BASE_API}/api/users`;
const api = axios.create({ withCredentials: true });

export const findUserById = async (uid) => {
  const response = await api.get(`${USERS_API}/${uid}`)
  return response.data
}

export const register = async (user) => {
  const response = await api.post(`${BASE_API}/register`, user)
  return response.data;
}

export const changePassword = async (user) => {
  const response = await api.post(`${BASE_API}/changepassword`, user)
  return response.data;
}

export const deleteUser = async (user) => {
  const response = await api.delete(`${USERS_API}/${user}`);
  return response.data
}

export const login = async (user) => {
  const response = await api.post(`${BASE_API}/login`, user)
  return response.data
}

export const logout = async () => {
  const response = await api.post(`${BASE_API}/logout`)
  return response.data
}

export const profile = async () => {
  const response = await api.post(`${BASE_API}/profile`)
  return response.data
}