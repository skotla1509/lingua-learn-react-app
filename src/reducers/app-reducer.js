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
  addNewFeedbackForDeckThunk,
  getUserStatisticsThunk,
  getUserLanguagesThunk,
  deletePostForUserThunk,
  endLanguageLearningThunk
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
      average_rating: 0,
      stats: [],
      learning_languages: [],
      redirectToHome: false
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
      [endLanguageLearningThunk.fulfilled]: (state, action) => {
        state.redirectToHome = true;
      },
      [deletePostForUserThunk.fulfilled]: (state, action) => {
        let posts = state.posts;
        posts = posts.filter(item => item.post_id.toString() !== action.payload.toString());
        state.posts = [...posts];
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
        state.isFavorite = action.payload ? true : false
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
      [getUserStatisticsThunk.fulfilled]: (state, action) => {
        state.stats = action.payload
      },
      [getUserLanguagesThunk.fulfilled]: (state, action) => {
        state.learning_languages = action.payload
      }
    }
  }
)

export const {setLanguage, setDeck} = appReducer.actions;
export default appReducer.reducer