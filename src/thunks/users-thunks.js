import {createAsyncThunk} from "@reduxjs/toolkit";
import {
	changePassword,
	findUserById,
	login,
	logout,
	register,
  test
} from "../services/users-services";

export const testThunk = createAsyncThunk(
  'test',
  async () => await test()
)

export const logoutThunk = createAsyncThunk(
  'logout',
  async () => await logout()
)

export const findUserByIdThunk = createAsyncThunk(
  'findUserById',
  async (uid) => {
		return await findUserById(uid)
	}
)

export const loginThunk = createAsyncThunk(
  'login',
  async (user) => await login(user)
)

export const registerThunk = createAsyncThunk(
  'register',
  async (user) => await register(user)
)

export const changePasswordThunk = createAsyncThunk(
  'changePassword',
  async (user) => await changePassword(user)
)