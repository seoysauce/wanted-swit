import React, { useState, useEffect, useRef } from 'react';
import { messageAdded } from 'redux/messagesSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { dateToString, isMessageEmpty } from 'utils';
import { nanoid } from '@reduxjs/toolkit';
import { INPUT_MESSAGE } from 'commons';
import * as S from './style';

interface IInputMessage {
  replyInfo: {
    userId: string;
    userName: string;
    content: string;
  };
}

export function InputMessage({ replyInfo }: IInputMessage) {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.setAttribute(
      'style',
      `height: ${textAreaRef.current.scrollHeight}px;overflow-y:hidden;`,
    );
  }, []);

  useEffect(() => {
    if (replyInfo.userName !== '' && replyInfo.content !== '') {
      const preFix = `${replyInfo.userName}\n${replyInfo.content}\n(회신)\n`;
      setMessage(`${preFix}${message}`);
    }
  }, [replyInfo]);

  const clearInput = () => {
    setMessage('');
  };

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

  const sendMessage = () => {
    clearInput();
    if (isMessageEmpty(message)) return;
    dispatchMessage(message);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!textAreaRef.current) return;
    console.log(textAreaRef.current.style.height);
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      }
      sendMessage();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputBox>
        <S.TextArea
          placeholder="Enter message"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          cols={INPUT_MESSAGE.WIDTH}
          value={message}
          ref={textAreaRef}
          spellCheck={false}
        />
        <S.Button disabled={isMessageEmpty(message)} type="button" onClick={() => sendMessage()}>
          전송
        </S.Button>
      </S.InputBox>
    </S.Form>
  );
}
