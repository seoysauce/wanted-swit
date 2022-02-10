import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE } from 'commons';
import { IMessage } from 'types';

const initialState: Array<IMessage> = INITIAL_STATE;

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageAdded: (state, action: PayloadAction<IMessage>) => {
      state.push(action.payload);
    },
    messageDeleted: (state, action: PayloadAction<string>) => {
      return state.filter((message) => message.messageId !== action.payload);
    },
  },
});

export const { messageAdded, messageDeleted } = messagesSlice.actions;

export default messagesSlice.reducer;
