import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, User } from '../../../types/types';
import { account, ID } from '../../../../appwrite/appwriteConfig';

export const signup = createAsyncThunk('auth/signup', async (user: User) => {
  try {
    const newUser = await account.create(
      ID.unique(1),
      user.email,
      user.password
    );
    console.log(newUser);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create account');
  }
});

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectAuthStatus = (state: { auth: AuthState }) =>
  state.auth.status;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;

export default authSlice.reducer;
