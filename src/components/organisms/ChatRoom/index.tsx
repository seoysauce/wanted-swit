import React, { useState, useEffect } from 'react';
import { useAppSelector } from 'hooks';
import { ICommentState } from 'types';
import { Chat, InputMessage } from 'components';
import { CURRENT_CHAT_ROOM } from 'commons';
import { Person } from 'assets';
import * as S from './style';

export function ChatRoom() {
  const commentInitial = {
    userId: '',
    userName: '',
    content: '',
  };
  const [comment, setComment] = useState<ICommentState>(commentInitial);
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
        <InputMessage replyInfo={comment} />
      </S.Wrap>
    </S.Container>
  );
}
