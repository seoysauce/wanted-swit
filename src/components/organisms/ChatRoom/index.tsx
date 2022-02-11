import React, { useState, useEffect } from 'react';
import { useAppSelector } from 'hooks';
import { ICommentState } from 'types';
import { Chat, InputMessage } from 'components';
import * as S from './style';

export function ChatRoom() {
  const commentInitial = {
    userId: '',
    userName: '',
    content: '',
  };
  const [comment, setComment] = useState<ICommentState>(commentInitial);
  const [initialInput, setInitialInput] = useState('');
  const messages = useAppSelector((state) => state.messages);

  return (
    <S.Container>
      {messages.map((message) => (
        <Chat
          key={message.messageId}
          message={message}
          setComment={setComment}
          setInitialInput={setInitialInput}
        />
      ))}
      <InputMessage initialInput={initialInput} />
    </S.Container>
  );
}
