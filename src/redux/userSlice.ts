import { nanoid, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types';

interface IUserAction {
  userId: string;
  userName: string;
}

const initialState: IUser = {
  userId: '',
  userName: 'Guest',
  profileImage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: {
      reducer: (state, action: PayloadAction<IUserAction>) => ({ ...state, ...action.payload }),
      prepare: (name: string) => ({
        payload: {
          userId: nanoid(),
          userName: name,
          profileImage: 'https://picsum.photos/200/300',
        },
      }),
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
