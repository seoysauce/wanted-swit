import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';
import { INITIAL_STATE } from 'commons';

interface Message {
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
}

const initialState: Array<Message> = INITIAL_STATE;

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageAdded: (state, action: PayloadAction<Message>) => {
      state.push(action.payload);
    },
    messageDeleted: (state, action: PayloadAction<Message>) => {
      return state.filter((message) => message !== action.payload);
    },
  },
});

export const { messageAdded, messageDeleted } = messagesSlice.actions;

export default messagesSlice.reducer;
