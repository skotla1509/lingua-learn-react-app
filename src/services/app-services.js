import axios from 'axios';
const BASE_API = `http://localhost:1000`;
const LANGUAGES_API = `${BASE_API}/api/languages`;
const api = axios.create({ withCredentials: true });

export const getAllLanguages = async (uid) => {
  const response = await api.get(`${LANGUAGES_API}/all`)
  return response.data
}