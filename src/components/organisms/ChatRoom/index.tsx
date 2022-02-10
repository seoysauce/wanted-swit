import React from 'react';
import { Chat } from 'components';
import { useAppSelector } from 'hooks';
import * as S from './style';

export function ChatRoom() {
  const messages = useAppSelector((state) => state.messages);

  return (
    <S.Container>
      {messages.map((message) => (
        <Chat key={message.messageId} message={message} />
      ))}
    </S.Container>
  );
}
