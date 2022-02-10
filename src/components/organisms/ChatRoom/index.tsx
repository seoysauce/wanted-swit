import React, { useState } from 'react';
import { useAppSelector } from 'hooks';
import { ICommentState } from 'types';
import { Chat } from 'components';
import * as S from './style';

export function ChatRoom() {
  const commentInitial = {
    userId: '',
    userName: '',
    content: '',
  };
  const [commnet, setComment] = useState<ICommentState>(commentInitial);
  const messages = useAppSelector((state) => state.messages);
  console.log(commnet);
  return (
    <S.Container>
      {messages.map((message) => (
        <Chat key={message.messageId} message={message} setComment={setComment} />
      ))}
    </S.Container>
  );
}
