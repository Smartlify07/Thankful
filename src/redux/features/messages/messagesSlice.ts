import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { database, ID } from '@/appwrite/appwriteConfig';
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

const MESSAGE_COLLECTION_ID = import.meta.env
  .VITE_APP_APPWRITE_MESSAGES_COLLECTION_ID;
const DATABASE_ID = import.meta.env.VITE_APP_APPWRITE_DATABASE_ID;

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (user_id: string, thunkAPI) => {
    try {
      return (
        await database.listDocuments(DATABASE_ID, MESSAGE_COLLECTION_ID, [
          Query.equal('user_id', user_id),
        ])
      ).documents as Message[];
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
      return response as Message;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editMessage = createAsyncThunk(
  'messages/editMessage',
  async (data: Message, thunkAPI) => {
    try {
      const response = await database.updateDocument(
        DATABASE_ID,
        MESSAGE_COLLECTION_ID,
        data.$id!,
        data
      );
      return response;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteMessage = createAsyncThunk(
  'messages/deleteMessage',
  async ($id: string, thunkAPI) => {
    try {
      await database.deleteDocument(DATABASE_ID, MESSAGE_COLLECTION_ID, $id);
      return $id;
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
      .addCase(
        createMessage.fulfilled,
        (state, action: { payload: Message }) => {
          state.status = 'fulfilled';
          state.messages.push(action.payload as Message);
        }
      )
      .addCase(createMessage.rejected, (state, action) => {
        state.error = action.error as string;
      })
      .addCase(editMessage.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(editMessage.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const updatedMessages = state.messages.map((message) => {
          if (message.$id === action.payload.$id) {
            return {
              ...message,
              title: action.payload.title,
              content: action.payload.content,
            };
          } else {
            return message;
          }
        });
        state.messages = updatedMessages;
      })
      .addCase(editMessage.rejected, (state, action) => {
        state.error = action.error as string;
      })
      .addCase(deleteMessage.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const filteredMessages = state.messages.filter(
          (message) => message.$id !== action.payload
        );
        state.messages = filteredMessages;
      })
      .addCase(deleteMessage.rejected, (state, action) => {
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
