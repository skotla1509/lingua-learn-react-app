import axios from 'axios';
const BASE_API = `http://localhost:1000`;
const LANGUAGES_API = `${BASE_API}/api/languages`;
const api = axios.create({ withCredentials: true });

export const getAllLanguages = async (uid) => {
  const response = await api.get(`${LANGUAGES_API}/all`)
  return response.data
}

export const getUserStatistics = async (uid) => {
  const response = await api.get(`${BASE_API}/api/users/${uid}/stats`)
  return response.data
}

export const getUserLanguages = async (uid) => {
  const response = await api.get(`${BASE_API}/api/users/${uid}/languages`)
  return response.data
}

export const addLanguageLearning = async (requestBody) => {
  const response = await api.post(`${LANGUAGES_API}/${requestBody.language_id}/learn`, requestBody)
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
  return response.data
}

export const markUnmarkDeckAsFavoriteForUser = async (requestBody) => {
  const response = await api.post(`${LANGUAGES_API}/decks/${requestBody.deck_id}/user/${requestBody.user_id}/favorite`, {})
  return response.data
}

export const checkFavoriteDeckForUser = async (requestBody) => {
  const response = await api.get(`${LANGUAGES_API}/decks/${requestBody.deck_id}/user/${requestBody.user_id}/favorite`)
  return response.data
}

export const getFeedbackForDeck = async (deck_id) => {
  const response = await api.get(`${LANGUAGES_API}/decks/${deck_id}/feedback`)
  return response.data
}

export const getAverageFeedbackForDeck = async (deck_id) => {
  const response = await api.get(`${LANGUAGES_API}/decks/${deck_id}/feedback/average`)
  return response.data
}

export const addNewFeedbackForDeck = async (requestBody) => {
  const response = await api.post(`${LANGUAGES_API}/decks/${requestBody.deck_id}/feedback`, requestBody)
  return response.data
}