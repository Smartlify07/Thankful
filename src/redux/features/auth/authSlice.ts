import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, User } from '../../../types/types';
import { account, ID } from '../../../../appwrite/appwriteConfig';
import { OAuthProvider } from 'appwrite';

export const signup = createAsyncThunk('auth/signup', async (user: User) => {
  try {
    const newUser = await account.create(
      ID.unique(1),
      user.email!,
      user.password!,
      user.name
    );
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create account');
  }
});

export const login = createAsyncThunk('auth/login', async (user: User) => {
  try {
    const loggedInUser = await account.createEmailPasswordSession(
      user.email!,
      user.password!
    );
    return loggedInUser;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to log in');
  }
});

export const googleLogin = createAsyncThunk('auth/googleLogin', async () => {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      import.meta.env.VITE_APP_BASE_URL,
      `${import.meta.env.VITE_APP_BASE_URL}/failed`
    );
  } catch (error) {
    console.error(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.error(error);
  }
});

export const getUser = createAsyncThunk('auth/getUser', async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.error(error);
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
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload as User;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(googleLogin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(googleLogin.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload as User;
      })
      .addCase(getUser.rejected, (state, action) => {
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
