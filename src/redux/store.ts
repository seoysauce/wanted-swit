import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messagesReducer from './messagesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
