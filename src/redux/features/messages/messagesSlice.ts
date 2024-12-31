import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { database, ID } from '@/appwrite/appwriteConfig';
import { DATABASE_ID, MESSAGE_COLLECTION_ID } from '@/constants';
import { Message } from '@/types/types';
import { Query } from 'appwrite';

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
  async (user_id: string, thunkAPI) => {
    try {
      return (
        await database.listDocuments(DATABASE_ID, MESSAGE_COLLECTION_ID, [
          Query.equal('user_id', user_id),
        ])
      ).documents;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createMessage = createAsyncThunk(
  'messages/createMessage',
  async (data: Message, thunkAPI) => {
    try {
      const response = await database.createDocument(
        DATABASE_ID,
        MESSAGE_COLLECTION_ID,
        ID.unique(),
        data
      );
      return response;
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
      })
      .addCase(createMessage.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.messages.push(action.payload);
      })
      .addCase(createMessage.rejected, (state, action) => {
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