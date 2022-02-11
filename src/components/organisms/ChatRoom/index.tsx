import React, { useState } from 'react';
import { useAppSelector } from 'hooks';
import { ICommentState } from 'types';
import { Chat } from 'components';
import { CURRENT_CHAT_ROOM } from 'commons';
import { Person } from 'assets';
import * as S from './style';

export function ChatRoom() {
  const commentInitial = {
    userId: '',
    userName: '',
    content: '',
  };
  const [commnet, setComment] = useState<ICommentState>(commentInitial);
  const messages = useAppSelector((state) => state.messages);

  return (
    <S.Container>
      <S.TopBar>
        <S.Title>{CURRENT_CHAT_ROOM.title}</S.Title>
        <S.Member>
          <Person />
          {CURRENT_CHAT_ROOM.membersCount}
        </S.Member>
      </S.TopBar>
      <S.Wrap>
        {messages.map((message) => (
          <Chat key={message.messageId} message={message} setComment={setComment} />
        ))}
      </S.Wrap>
    </S.Container>
  );
}
