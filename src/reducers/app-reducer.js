import {createSlice} from "@reduxjs/toolkit";
import {
  createPostForLanguageThunk, getAllCardsForDeckThunk,
  getAllDecksForLanguageThunk,
  getAllLanguagesThunk,
  getAllPostsForLanguagesThunk,
  createPracticeHistoryForLanguageThunk,
  getAllPracticeQuestionsForDeckThunk,
  checkFavoriteDeckForUserThunk,
  markUnmarkDeckAsFavoriteForUserThunk,
  getFeedbackForDeckThunk,
  getAverageFeedbackForDeckThunk,
  addNewFeedbackForDeckThunk
} from "../thunks/app-thunks";

const appReducer = createSlice(
  {
    name: 'app',
    initialState: {
      languages: [],
      selected_language: null,
      selected_deck: null,
      decks: [],
      posts: [],
      cards: [],
      questions: [],
      practice: null,
      isFavorite: false,
      feedbackList: [],
      average_rating: 0
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
        state.practice = null
      },
      [getAllPracticeQuestionsForDeckThunk.fulfilled]: (state, action) => {
        state.questions = action.payload
      },
      [createPracticeHistoryForLanguageThunk.fulfilled]: (state, action) => {
        state.practice = action.payload
      },
      [checkFavoriteDeckForUserThunk.fulfilled]: (state, action) => {
        state.isFavorite = action.payload
      },
      [markUnmarkDeckAsFavoriteForUserThunk.fulfilled]: (state, action) => {
        state.isFavorite = !state.isFavorite
      },
      [getFeedbackForDeckThunk.fulfilled]: (state, action) => {
        state.feedbackList = action.payload
      },
      [addNewFeedbackForDeckThunk.fulfilled]: (state, action) => {
        state.feedbackList.push(action.payload)
      },
      [getAverageFeedbackForDeckThunk.fulfilled]: (state, action) => {
        state.average_rating = action.payload.avg_rating
      },
    }
  }
)

export const {setLanguage, setDeck} = appReducer.actions;
export default appReducer.reducer