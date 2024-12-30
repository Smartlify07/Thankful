import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import messagesReducer from './features/messages/messagesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messagesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
