import axios from 'axios';
const BASE_API = `http://localhost:1000`;
const LANGUAGES_API = `${BASE_API}/api/languages`;
const api = axios.create({ withCredentials: true });

export const getAllLanguages = async (uid) => {
  const response = await api.get(`${LANGUAGES_API}/all`)
  return response.data
}

export const getAllDecksForLanguage = async (uid) => {
  const response = await api.get(`${LANGUAGES_API}/decks/${uid}`)
  return response.data
}

export const getAllPostsForLanguages = async (uid) => {
  const response = await api.get(`${LANGUAGES_API}/posts/${uid}`)
  return response.data
}

export const createPostForLanguage = async (requestBody) => {
  const response = await api.post(`${LANGUAGES_API}/posts/${requestBody.language_id}/new`, requestBody)
  return response.data
}

export const getAllCardsForDeck = async (uid) => {
  const response = await api.get(`${LANGUAGES_API}/decks/${uid}/cards`)
  return response.data
}

export const getAllPracticeQuestionsForDeck = async (uid) => {
  const response = await api.get(`${LANGUAGES_API}/decks/${uid}/questions`)
  return response.data
}

export const createPracticeHistoryForLanguage = async (requestBody) => {
  const response = await api.post(`${LANGUAGES_API}/decks/${requestBody.deck_id}/practice`, requestBody)
  return response.data
}