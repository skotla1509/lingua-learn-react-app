import {createAsyncThunk} from "@reduxjs/toolkit";
import {
	getAllDecksForLanguage,
	getAllLanguages,
	getAllPostsForLanguages,
	createPostForLanguage, 
  getAllCardsForDeck,
  createPracticeHistoryForLanguage,
  getAllPracticeQuestionsForDeck,
  checkFavoriteDeckForUser,
  markUnmarkDeckAsFavoriteForUser,
  getFeedbackForDeck,
  addNewFeedbackForDeck,
  getAverageFeedbackForDeck,
  addLanguageLearning,
  getUserStatistics,
  getUserLanguages
} from "../services/app-services";

export const getUserStatisticsThunk = createAsyncThunk(
	'getUserStatistics',
	async (user_id) => await getUserStatistics(user_id)
)

export const getUserLanguagesThunk = createAsyncThunk(
	'getUserLanguages',
	async (user_id) => await getUserLanguages(user_id)
)

export const getAllLanguagesThunk = createAsyncThunk(
  'getAllLanguages',
  async () => await getAllLanguages()
)

export const addLanguageLearningThunk = createAsyncThunk(
	'addLanguageLearning',
	async (requestBody) => await addLanguageLearning(requestBody)
)

export const getAllDecksForLanguageThunk = createAsyncThunk(
	'getAllDecksForLanguage',
	async (language_id) => await getAllDecksForLanguage(language_id)
)

export const getAllPostsForLanguagesThunk = createAsyncThunk(
	'getAllPostsForLanguages',
	async (language_id) => await getAllPostsForLanguages(language_id)
)

export const createPostForLanguageThunk = createAsyncThunk(
	'createPostForLanguage',
	async (requestBody) => await createPostForLanguage(requestBody)
)

export const getAllCardsForDeckThunk = createAsyncThunk(
	'getAllCardsForDeck',
	async (deck_id) => await getAllCardsForDeck(deck_id)
)

export const getAllPracticeQuestionsForDeckThunk = createAsyncThunk(
	'getAllPracticeQuestionsForDeck',
	async (deck_id) => await getAllPracticeQuestionsForDeck(deck_id)
)

export const createPracticeHistoryForLanguageThunk = createAsyncThunk(
	'createPracticeHistoryForLanguage',
	async (requestBody) => await createPracticeHistoryForLanguage(requestBody)
)

export const markUnmarkDeckAsFavoriteForUserThunk = createAsyncThunk(
	'markUnmarkDeckAsFavoriteForUser',
	async (requestBody) => await markUnmarkDeckAsFavoriteForUser(requestBody)
)

export const checkFavoriteDeckForUserThunk = createAsyncThunk(
	'checkFavoriteDeckForUser',
	async (requestBody) => await checkFavoriteDeckForUser(requestBody)
)

export const getFeedbackForDeckThunk = createAsyncThunk(
	'getFeedbackForDeck',
	async (deck_id) => await getFeedbackForDeck(deck_id)
)

export const getAverageFeedbackForDeckThunk = createAsyncThunk(
	'getAverageFeedbackForDeck',
	async (deck_id) => await getAverageFeedbackForDeck(deck_id)
)

export const addNewFeedbackForDeckThunk = createAsyncThunk(
	'addNewFeedbackForDeck',
	async (requestBody) => await addNewFeedbackForDeck(requestBody)
)
