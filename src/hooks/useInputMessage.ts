import React, { useState, useEffect, useRef } from 'react';
import { messageAdded } from 'redux/messagesSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import { dateToString, isMessageEmpty } from 'utils';
import { IInputMessage } from 'types';
import { nanoid } from '@reduxjs/toolkit';

export const useInputMessage = ({
  replyInfo,
}: IInputMessage): [
  string,
  React.RefObject<HTMLTextAreaElement>,
  (e: React.FormEvent<HTMLFormElement>) => void,
  (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  (e: React.KeyboardEvent<HTMLTextAreaElement>) => void,
  () => void,
] => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState('');

  const resizeTextArea = () => {
    if (!textAreaRef.current) return;
    console.log(textAreaRef.current.scrollHeight); //
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 100)}px`;
  };

  const setInput = (input: string) => {
    setMessage(input);
    resizeTextArea();
  };

  const clearInput = () => {
    setMessage('');
    if (textAreaRef.current) textAreaRef.current.value = '';
    resizeTextArea();
  };

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
      setInput(`${preFix}${message}`);

      if (textAreaRef.current) {
        textAreaRef.current.value = `${preFix}${message}`;
        resizeTextArea();
        textAreaRef.current.focus();
      }
    }
  }, [replyInfo]);

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
    if (isMessageEmpty(message)) return;
    clearInput();
    dispatchMessage(message);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      }
      e.preventDefault();
      sendMessage();
    }
  };

  return [message, textAreaRef, handleSubmit, handleChange, handleKeyPress, sendMessage];
};
