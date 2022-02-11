import React, { useState, useEffect, useRef } from 'react';
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
  const messages = useAppSelector((state) => state.messages);
  const [comment, setComment] = useState<ICommentState>(commentInitial);
  const [lastMessage, setLastMessage] = useState(messages[messages.length - 1]);
  const messageBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length === 0) return;
    setLastMessage(messages[messages.length - 1]);
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [lastMessage]);

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
        <S.MessageBox ref={messageBoxRef}>
          {messages.map((message) => (
            <Chat key={message.messageId} message={message} setComment={setComment} />
          ))}
        </S.MessageBox>
      </S.Wrap>
      <InputMessage replyInfo={comment} />
    </S.Container>
  );
}
