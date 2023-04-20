import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAllLanguages } from "../services/app-services";

export const getAllLanguagesThunk = createAsyncThunk(
  'getAllLanguages',
  async () => await getAllLanguages()
)