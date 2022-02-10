import { nanoid } from 'nanoid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  userId: string;
  userName: string;
  profileImage: string;
}

interface UserAction {
  userId: string;
  userName: string;
}

const initialState: User = {
  userId: '',
  userName: '',
  profileImage: 'https://picsum.photos/200/300',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: {
      reducer: (state, action: PayloadAction<UserAction>) => ({ ...state, ...action.payload }),
      prepare: (name: string) => ({ payload: { userId: nanoid(), userName: name } }),
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
