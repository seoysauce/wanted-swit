import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { messageAdded, messageDeleted } from 'redux/messagesSlice';
import { setUser } from 'redux/userSlice';
import { RegisterModal } from 'components';
import { dateToString } from 'utils';

export function Main() {
  const user = useAppSelector((state) => state.user);
  const messages = useAppSelector((state) => state.messages);
  const dispatch = useAppDispatch();

  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    if (!user.userName) {
      setIsEmpty(true);
    }
    console.log(messages);
  }, [user, messages, isEmpty]);

  const testMessage = {
    userId: '4',
    userName: 'Heejun',
    profileImage: 'https://',
    content: '테스트에요',
    date: '2022-02-10 16:30:34',
  };

  const convertInputToMessage = (input: string) => ({
    ...user,
    content: input,
    date: dateToString(new Date()),
  });

  return (
    <div>
      <div>
        {isEmpty && <RegisterModal setIsEmpty={setIsEmpty} />}
        <button type="button" onClick={() => dispatch(messageAdded(testMessage))}>
          +message
        </button>
        <button type="button" onClick={() => dispatch(messageDeleted(testMessage))}>
          -message
        </button>
        <button type="button" onClick={() => dispatch(setUser('GUEST'))}>
          user
        </button>
      </div>
    </div>
  );
}
