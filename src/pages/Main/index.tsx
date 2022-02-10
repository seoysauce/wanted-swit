import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { messageAdded, messageDeleted } from 'redux/messagesSlice';
import { setUser } from 'redux/userSlice';
import { RegisterModal, Messenger, InputMessage } from 'components';
import { dateToString } from 'utils';
import { nanoid } from '@reduxjs/toolkit';

let testId: string; //

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

  const convertInputToMessage = (input: string) => ({
    ...user,
    content: input,
    date: dateToString(new Date()),
    messageId: nanoid(),
  });

  const sendMessage = (input: string) => {
    const convertedMessage = convertInputToMessage(input);
    dispatch(messageAdded(convertedMessage));

    testId = convertedMessage.messageId;
  };

  return (
    <div>
      <div>
        {isEmpty && <RegisterModal setIsEmpty={setIsEmpty} />}
        <button type="button" onClick={() => sendMessage('테스트')}>
          +message
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(messageDeleted(testId));
          }}
        >
          -message
        </button>
        <button type="button" onClick={() => dispatch(setUser('GUEST'))}>
          user
        </button>
        <Messenger />
      </div>
      <InputMessage />
    </div>
  );
}
