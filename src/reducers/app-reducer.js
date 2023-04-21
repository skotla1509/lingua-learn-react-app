import {createSlice} from "@reduxjs/toolkit";
import {
  createPostForLanguageThunk, getAllCardsForDeckThunk,
  getAllDecksForLanguageThunk,
  getAllLanguagesThunk,
  getAllPostsForLanguagesThunk,
  createPracticeHistoryForLanguageThunk,
  getAllPracticeQuestionsForDeckThunk
} from "../thunks/app-thunks";

const appReducer = createSlice(
  {
    name: 'users',
    initialState: {
      languages: [],
      selected_language: null,
      selected_deck: null,
      decks: [],
      posts: [],
      cards: [],
      questions: []
    },
    reducers: {
      setLanguage(state, action) {
        state.selected_language = action.payload;
      },
      setDeck(state, action) {
        state.selected_deck = action.payload;
      }
    },
    extraReducers: {
      [getAllLanguagesThunk.fulfilled]: (state, action) => {
        state.languages = action.payload
      },
      [getAllDecksForLanguageThunk.fulfilled]: (state, action) => {
        state.decks = action.payload
      },
      [getAllPostsForLanguagesThunk.fulfilled]: (state, action) => {
        state.posts = action.payload
      },
      [createPostForLanguageThunk.fulfilled]: (state, action) => {
        state.posts.push(action.payload)
      },
      [getAllCardsForDeckThunk.fulfilled]: (state, action) => {
        state.cards = action.payload
      },
      [getAllPracticeQuestionsForDeckThunk.fulfilled]: (state, action) => {
        state.questions = action.payload
      },
      [createPracticeHistoryForLanguageThunk.fulfilled]: (state, action) => {
        state.practice = action.payload
      }
    }
  }
)

export const {setLanguage, setDeck} = appReducer.actions;
export default appReducer.reducer