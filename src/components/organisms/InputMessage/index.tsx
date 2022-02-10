import React, { useState } from 'react';
import { messageAdded } from 'redux/messagesSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { dateToString } from 'utils';
import { nanoid } from '@reduxjs/toolkit';
import * as S from './style';

export function InputMessage() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState('');

  const convertInputToMessage = (input: string) => ({
    ...user,
    content: input,
    date: dateToString(new Date()),
    messageId: nanoid(),
  });

  const dispatchMessage = (input: string) => {
    const convertedMessage = convertInputToMessage(input);
    dispatch(messageAdded(convertedMessage));
  };

  const clearMessage = () => {
    setMessage('');
  };

  const sendMessage = () => {
    clearMessage();
    dispatchMessage(message);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          e.key === 'Enter' && sendMessage();
        }}
      />
      <button type="button" onClick={() => sendMessage()}>
        전송
      </button>
    </form>
  );
}
