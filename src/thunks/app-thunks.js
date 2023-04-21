import {createAsyncThunk} from "@reduxjs/toolkit";
import {
	getAllDecksForLanguage,
	getAllLanguages,
	getAllPostsForLanguages,
	createPostForLanguage, 
  getAllCardsForDeck,
  createPracticeHistoryForLanguage,
  getAllPracticeQuestionsForDeck
} from "../services/app-services";

export const getAllLanguagesThunk = createAsyncThunk(
  'getAllLanguages',
  async () => await getAllLanguages()
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
