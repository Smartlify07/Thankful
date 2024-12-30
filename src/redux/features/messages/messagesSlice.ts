import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { database } from '@/appwrite/appwriteConfig';
import { DATABASE_ID, MESSAGE_COLLECTION_ID } from '@/constants';
import { Message } from '@/types/types';

type MessagesState = {
  messages: Message[];
  error: null | string;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
};

const initialState: MessagesState = {
  messages: [],
  error: null,
  status: 'idle',
};

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (_, thunkAPI) => {
    try {
      return (await database.listDocuments(DATABASE_ID, MESSAGE_COLLECTION_ID))
        .documents;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.error = action.error as string;
      });
  },
});

export const selectMessages = (state: { messages: MessagesState }) =>
  state.messages.messages;

export const selectMessagesError = (state: { messages: MessagesState }) =>
  state.messages.error;

export const selectMessagesStatus = (state: { messages: MessagesState }) =>
  state.messages.status;

export default messagesSlice.reducer;
