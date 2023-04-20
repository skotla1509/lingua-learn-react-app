import {createSlice} from "@reduxjs/toolkit";
import { getAllLanguagesThunk } from "../thunks/app-thunks";

const appReducer = createSlice(
  {
    name: 'users',
    initialState: {
      languages: [],
      selected_language: null
    },
    reducers: {
      setLanguage(state, action) {
        state.selected_language = action.payload;
      }
    },
    extraReducers: {
      [getAllLanguagesThunk.fulfilled]: (state, action) => {
        state.languages = action.payload
      }
    }
  }
)

export const {setLanguage} = appReducer.actions;
export default appReducer.reducer